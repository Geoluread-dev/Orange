const Discord = require("discord.js");
const bot = new Discord.Client();
const { token } = require("./config.json");
require("./functions")(bot);

bot.handlers = new Discord.Collection();
bot.commands = new Discord.Collection();
bot.embeds = new Discord.MessageEmbed();

module.exports = {
	bot: bot
};

bot.login(token);
