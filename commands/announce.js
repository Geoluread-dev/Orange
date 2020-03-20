module.exports = {
  name: "announce",
  description: "",
  permission: "Geoluread",
  execute(Discord, bot, message, args) {
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor("#ff5733")
      .setTitle('**Announcement**')
      .setDescription("Yes yes yes, today is the day. We have a great announcement for you peeps. A few people have been testing the feel and the overall idea of the Minecraft Server. But today I proudly announce that the 1st of April will be the start of season 1 of the Geoluread Server.\n\n But for a new season we need planning, lot's of it. With this planning we can truly get everything out of the Minecraft Server. Here is a list of thing that we need to decide.\n **-** _A few rules, not too much,_\n **-** _A seed,_\n **-** _Decide what to do when the new nether is added,_\n **-** _And maybe some more..._\n\n The most important thing of this server is just to have fun really. Nothing more, nothing less. I hope that someday we don't need rules and just use our common sence.\n\n Yours faithfully,\n Geoluread. |")
      .setThumbnail("https://raw.githubusercontent.com/Geoluread-dev/Orange/master/assets/geolureadLogoBig.gif")
      .setFooter("6541");
    message.channel.send(embed);
  }
}
