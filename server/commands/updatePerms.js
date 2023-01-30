/**
 * Registers a command to update a players permissions
 * 
 * @param {Client} client the client instance for the discord bot
 * @param {(player: number, discord: string, roles: { [guild: string]: string[] }) => void} cb the function to be called after the 
 * command is entered and the players roles are collected
 */

function updatePerms(client, cb) {
    RegisterCommand("updateperms", async (source, args, raw) => {
        console.log(`Updating ${GetPlayerName(source)}'s permissions`)

        const discord = getPlayerIdentifiers(source).find((value) => value.startsWith('discord:')).substring(8)
        const roles = await getGuildRoles(client, discord)

        cb(discord, roles)
    })
}