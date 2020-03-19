module.exports = {
  name: "coords",
  description: "",
  execute(Discord, bot, message, args){
    if(!message.channel.id === "687772722213945434") return message.channel.send("Command is not send to the right channel");
    if(!args[0]) return message.channel.send("Make sure to type in the coords. Format x, y, z.");
    if(!args[1]) return message.channel.send("Make sure to type in all the coords. Missing y and z.");
    if(!args[2]) return message.channel.send("Make sure to type in all the coords. Only missing z.");
    if(!args[3]) return message.channel.send("Please give it a Title.");

    if(args[1] < 0 || args[1] > 256) return message.channel.send("That's not a valid y coord.");

    var x = parseInt(args[0]);
    var y = parseInt(args[1]);
    var z = parseInt(args[2]);

    let msgArgs = args.slice(3).join(" ");
    const title = msgArgs;

    const color = message.member.displayHexColor;

    let embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setColor(color)
      .setThumbnail(message.author.displayAvatarURL())
      .addField("x", x, true)
      .addField("y", y, true)
      .addField("z", z, true)
      .setTimestamp()
      .setFooter("This coord was provided by: " + message.author.username);

    message.channel.send(embed);
  }
};
