# FivemDiscordPermissions
A fivem resource that allows servers to use multiple discords as permission sources

## Features
- give players ace permissions based on what roles they have in a discord
- use multiple discord servers to give permissions

## Support
dm me on discord (DaPickle#8141)

## Notes
- make sure you have "developer mode" enabled on your discord account
- the first time the resource starts it will need to build so don't go crazy when you see it downloading stuff

# Install
- dowload this repository

- have a discord bot created
    - if you don't know how to make one use this website (https://www.upwork.com/resources/how-to-make-discord-bot)
    - under step 9 for simplicity sake you can just give the bot the administrator permission

- make sure that discord bot is in every discord that you want to have permissions for
- drag the FivemDiscordPermissions into the `resources` folder `or a subfolder` of the resource folder
- add the following to your server.cfg
```
start FivemDiscordPermissions
add_ace resource.FivemDiscordPermissions command.add_principal allow
add_ace resource.FivemDiscordPermissions command.remove_principal allow
```
- open the config.json and add your discord bots bot token
```
"BOT_TOKEN": "Your token goes here"
```

- open the permissions.js file 
- in the file you will see the format to use but I will restate it here
```
["GUILD_ID_HERE"]: {
    "ROLE_ID_HERE": "PERMISSION GROUP",
},
```
- all you need to do is copy and paste the format for as many discords as you have and remove the `//` in front of each line
- now just fill in the blanks
- to get the guild ID of a discord server right click on the server icon and click copy ID at the bottom
- to get the role ID of a discord role open the server setting -> click on roles -> right click on the role -> click copy ID

- an example of a completed permission.js file should look something like this
```
const permissions = {
    // ["GUILD_ONE_ID_HERE"]: {
    //     "ROLE_ID_HERE": "PERMISSION GROUP",
    //     "ROLE_ID_HERE": "PERMISSION GROUP",
    // },
    ["723210193214767121"]: {
        "714607086562181280": "group.staff",
        "718723931682373663": "group.donator",
    },
    ["714606988675252241"]: {
        "748236405389394030": "group.lspd",
        "735948035187802192": "group.supervisor",
        "714607075027714049": "group.subdivisionname",
    },
    ["714940271074213891"]: {
        "714607084485738507": "group.bcso",
    },
}
```