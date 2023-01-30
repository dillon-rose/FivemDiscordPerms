/**
 * handles players leaving the server
 * 
 * @param {(discord: string) => void} cb the function to be called after the 
 * player leaves
 */

function onLeave(cb) {
    on("playerDropped", (reason) => {
        const player = global.source
        const discord = getPlayerIdentifiers(player).find((value) => value.startsWith('discord:')).substring(8)

        console.log(`Player ${GetPlayerName(player)} dropped, removing permission groups `)

        cb(discord)
    });
}