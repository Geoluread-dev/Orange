module.exports = {
  name: "foobar",
  description: "",
  permission: ["Moderators", "Kneusjes", "Yeet", "bar", "foo"],
  execute(Discord, bot, message, args){
    message.channel.send("bar");
  }
}
