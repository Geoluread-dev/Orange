require("../index");

module.exports = {
  name: "embed",
  description: "",
  permission: ["684373684764278806"],
  execute(Discord, bot, message, args) {

    if(!args[0]) return message.channel.send("Add or set?");
    if(!args[1]) return message.channel.send("File name needed!");

    const embedFile = args[1];
    const embedFiles = bot.embeds.get(embedFile);

    if(embedFile !== embedFiles.name) {
      message.channel.send("This file does not exist")
    } else {
      message.channel.send({ embed: embedFiles.embed});
      message.channel.send({ embed: embedFiles.embed1}); //gives error if embed does not have a embed1 tag
    }
  }
}
