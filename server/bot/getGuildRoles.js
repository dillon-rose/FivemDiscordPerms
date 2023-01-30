/**
 * Gets a clients roles in all of the config guilds
 * 
 * @param {Client} client the client instance for the discord bot
 * @param {string} discordID the discord ID of the player
 * 
 * @returns Object that contains each config guild and an Array of the configured roles the user has in it
 */
async function getGuildRoles(client, discordID) {
    if (!discordID) return null

    let roles = {}

    for (const key in permissions) {
        roles[key] = []
        
        const guild = await client.guilds.cache.get(key)
        let member

        if (!guild) {
            console.log("The guild was not found. \nMake sure the bot is in the discord and the correct guild ID was given.\nGuild ID:" + key)
            continue;
        }

        try {
            member = await guild.members.fetch(discordID)
        } catch(error) {
            console.log("Member not in guild")
            continue;
        }

        member.roles.cache.forEach(role => {
            if (!permissions[key][role.id]) return

            roles[key].push(role.id)
        })
    }

    return roles;
}