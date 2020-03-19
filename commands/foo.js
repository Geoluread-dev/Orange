module.exports = {
  name: "foo",
  description: "not an easter eggs",
  execute(Discord, bot, message, args){
    message.channel.send("bar");
  }
}
