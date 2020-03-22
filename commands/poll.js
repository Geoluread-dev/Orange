module.exports = {
  name: "poll",
  description: "",
  permission: ["684373684764278806"],
  execute(Discord, bot, message, args) {
    if(!args[0]) return message.channel.send("Please give the poll a title");
    let msgTitle = args.slice(0, 1).join(" ");
    let msgArgs = args.slice(1).join(" ");

    var embed = new Discord.MessageEmbed()
      .setColor("#ff5733")
      .setTitle(msgTitle)
      .setDescription(msgArgs);

    message.channel.send(embed).then(messageReaction => {
      messageReaction.react("👍🏿");
      messageReaction.react("👎🏿");
    }).catch(console.error);
  }
}
