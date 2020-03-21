const fs = require("fs");
const Discord = require("discord.js");
const { bot } = require("../index");
const prefix = "_";

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  var perm = bot.commands.get(command).permission;
  let failed = false;

  if (!bot.commands.has(command)) return;

  try {
    for(var i = 0; i < perm.length; i++){
      if (message.member.roles.cache.has(perm[i])) {
        bot.commands.get(command).execute(Discord, bot, message, args);
        message.delete({timeout: 3000}).catch(console.error);
        console.log(perm[i]);
        failed = true;
      }
    }
  } catch (error) {
    console.error(error);
  }
});
