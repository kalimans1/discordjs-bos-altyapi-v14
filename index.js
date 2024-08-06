```
const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({ intents: [Object.values(GatewayIntentBits)], partials: [Object.values(Partials)] });

client.on("ready", async () => {
    try {
        const guild = await client.guilds.cache.get("1214280471496892516");

        if (!guild) {
            console.error("Guild not found!");
            return;
        }

        const bans = await guild.bans.fetch();
        
        bans.forEach(async ban => {
            try {
                await guild.members.unban(ban.user.id);
                console.log("Unbanned: " + ban.user.username);
            } catch (err) {
                console.error("Failed to unban " + ban.user.username + ": " + err);
            }
        });
    } catch (err) {
        console.error("An error occurred: " + err);
    }
});

client.login(process.env.token);```
