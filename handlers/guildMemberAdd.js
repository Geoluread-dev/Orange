const { bot } = require("../index");

bot.on("guildMemberAdd", member => {
  console.log(`${member} joined the server`);
})
