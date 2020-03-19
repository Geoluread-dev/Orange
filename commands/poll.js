module.exports = {
  name: "poll",
  description: "",
  execute(Discord, bot, message, args, errorEmbed) {

    if(!args[1]) return message.channel.send("Please give the poll a title");

    let msgArgs = args.slice(1).join(" ");

    var embed = new Discord.MessageEmbed()
      .setTitle(msgArgs)
      .setColor("ff5733");

    message.channel.send(embed).then(messageReaction => {
      messageReaction.react("👍🏿");
      messageReaction.react("👎🏿");
    })
  }
}
