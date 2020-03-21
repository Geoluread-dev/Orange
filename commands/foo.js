module.exports = {
  name: "foobar",
  description: "",
  permission: ["679776203074175079"],
  execute(Discord, bot, message, args){
    message.channel.send("bar");
  }
}
