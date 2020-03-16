module.exports = {
  name: "coords",
  description: "",
  execute(Discord, bot, message, args){
    if(message.channel.id === "687772722213945434") {
      if(!args[0]) return message.channel.send("Make sure to type in the coords. Format x, y, z.");
      if(!args[1]) return message.channel.send("Make sure to type in all the coords. Missing y and z.");
      if(!args[2]) return message.channel.send("Make sure to type in all the coords. Only missing z.");
      if(!args[3]) return message.channel.send("Please give it a Title.");

      if(args[1] < 0 || args[1] > 256) return message.channel.send("That's not a valid y coord.");

      var x = parseInt(args[0]);
      var y = parseInt(args[1]);
      var z = parseInt(args[2]);
      const title = args[3];

      let embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setColor("#ff5733")
        .setThumbnail(message.author.displayAvatarURL())
        .addField("x", x, true)
        .addField("y", y, true)
        .addField("z", z, true)
        .setTimestamp()
        .setFooter("This coord was provided by: " + message.author.username);

        bot.channels.fetch('687770130167627780')
        .then(channel => channel.send(embed))
        .catch(console.error);
    }
  }
};
