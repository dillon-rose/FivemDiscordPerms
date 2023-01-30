const players = new Map();

/**
 * gives a player ace perms for each discord role they have
 * 
 * @param {{ [guild: string]: string[] }} roles an object containing all of the guilds a player has roles in
 * @param {string} discord the players discord ID (can't be null)
 */
function addAcePerms(roles, discord) {
    for (const guild in roles) {
        for (const role of roles[guild]) {
            const permission = permissions[guild][role]
            const commandString = `add_principal identifier.discord:${discord} ${permission}`

            console.log(commandString)
            ExecuteCommand(commandString)
        }
    }
}

/**
 * removes a player ace perms for each discord role they have
 * 
 * @param {{ [guild: string]: string[] }} roles an object containing all of the guilds a player has roles in
 * @param {string} discord the players discord ID (can't be null)
 */
function removeAcePerms(roles, discord) {
    for (const guild in roles) {
        for (const role of roles[guild]) {
            const permission = permissions[guild][role]
            const commandString = `remove_principal identifier.discord:${discord} ${permission}`

            console.log(commandString)
            ExecuteCommand(commandString)
        }
    }
}

/**
 * handels all player permissions logic
 * 
 * @param {Client} client the client instance for the discord bot
 */
function handlePermissions(client) {
    
    onConnect(client, (discord, roles) => {
        if (!discord) return
        
        addAcePerms(roles, discord)

        players.set(discord, roles)
    });

    onLeave((discord) => {
        if (!discord) return

        let roles = players.get(discord)

        removeAcePerms(roles, discord)

        players.delete(discord)
    });

    updatePerms(client, (discord, roles) => {
        if (!discord) return

        let oldRoles = players.get(discord)

        // remove old permissions
        if (oldRoles) {
            removeAcePerms(oldRoles, discord)
        }

        // add new permissions
        addAcePerms(roles, discord)

        players.set(discord, roles)
    });
}