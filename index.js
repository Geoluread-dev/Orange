const Discord = require("discord.js");
const bot = new Discord.Client();
require('dotenv').config();
require("./functions")(bot);

bot.handlers = new Discord.Collection();
bot.commands = new Discord.Collection();
bot.embeds = new Discord.Collection();

module.exports = {
	bot: bot
};

bot.login(process.env.TOKEN);
