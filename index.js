const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "Njg3NTk3MDk2ODMyMDczNzY4.XmoE4w.ejlIBY4ioUEfyY-vP3A0u8b_kiE";
const PREFIX = "_";

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on("ready", () =>{
    console.log("Peeling ;)")
    bot.user.setActivity("y'all fail.", { type: 'WATCHING' })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
})

bot.on("message", message =>{
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(' ');
    const command = args.shift().toLowerCase();

    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
})

bot.login(token);