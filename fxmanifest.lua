fx_version 'bodacious'
games { 'gta5' }
author "DaPickle"

server_scripts {
    'permissions.js',
    'server/bot/getGuildRoles.js',
    'server/commands/updatePerms.js',
    'server/Events/onConnect.js',
    'server/Events/onLeave.js',
    'server/server.js',
    'index.js',
}

dependencies {
    "yarn"
}