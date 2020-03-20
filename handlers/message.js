const fs = require("fs");
const Discord = require("discord.js");
const { bot } = require("../index");
const prefix = "_";

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(Discord, bot, message, args);
    message.delete({timeout: 3000}).catch(console.error);
  } catch (error) {
    console.error(error);
  }
});
