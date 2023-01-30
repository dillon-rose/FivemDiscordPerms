const config = require("./config.json")
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
	],
});

client.on("ready", () => {
    console.log("Permissions Bot online")

    handlePermissions(client)
})

client.on("error", (err) => {
    console.log(err);
});

client.on("rateLimit", (rateLimit) => {
    console.log(JSON.stringify(rateLimit));
});

client.login(config.BOT_TOKEN)