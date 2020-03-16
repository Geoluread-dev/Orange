module.exports = {
  name: "ping",
  description: "",
  execute(Discord, bot, message, args){
    bot.channels.fetch('687770130167627780')
    .then(channel => channel.send("pong"))
    .catch(console.error);
  }
}
