module.exports = {
  name: "welcome-embed",
  description: "",
  execute(Discord, bot, message, args){
    var embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor("#ff5733")
      .setTitle("**Welcome to the Geoluread Server!**")
      .setURL("https://github.com/Geoluread-dev/Orange")
      .setDescription("For the ones who don't know: this is just place where a small community can build up to something big. While other servers maintain the server with a bot called 'Dyno'. I try to maintain it through Gods creation:\n\n      > **Orange**\n\n You can fork the development of **Orange** in GitHub using the link in the title.\n\n Yours faithfully,\n Geoluread. |")
      .setFooter("6541");
    message.channel.send(embed);
  }
}
