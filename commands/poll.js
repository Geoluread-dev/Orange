module.exports = {
  name: "poll",
  description: "",
  execute(Discord, bot, message, args) {

    if(!message.channel.id === "690247061571895319") return message.channel.send("Command is not send to the right channel");
    if(!args[1]) return message.channel.send("Please give the poll a title");
    let msgArgs = args.slice(0).join(" ")

    var embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatar())
      .setColor("#ff5733")
      .setDescription(msgArgs);

    message.channel.send(embed)

    bot.channels.fetch('689929818795409543')
      .then(channel => channel.send(embed)
      .then(messageReaction => {
        messageReaction.react("👍🏿");
        messageReaction.react("👎🏿");
      })).catch(console.error);
  }
}
