/**
 * handles the connection of a player joining the server and triggers a callback
 * 
 * @param {Client} client the client instance for the discord bot
 * @param {(discord: string, roles: { [guild: string]: string[] }) => void} cb the function to be called after the 
 * players roles are collected
 */

function onConnect(client, cb) {
    on('playerConnecting', async (playerName, setKickReason, deferrals) => {
        console.log(`New Connection [${playerName}]`);

        const player = global.source
        const discord = getPlayerIdentifiers(player).find((value) => value.startsWith('discord:')).substring(8)
        const roles = await getGuildRoles(client, discord)

        cb(discord, roles)
    });
}