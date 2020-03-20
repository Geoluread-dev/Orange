const ping = require('minecraft-server-util');

module.exports = {
  name: "server-info",
  description: "",
  permission: "Geoluread",
  execute(Discord, bot, message, args) {
    ping('147.135.160.192', 25600, (error, response) => {
      if (error) throw error;

      let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("#ff5733")
        .setTitle('**Server Information**')
        .setDescription("Don't forget to add the port in the server ip form. Format:\n > `Server IP : Server Port.`")
        .addField("Server IP", response.host, true)
        .addField("Server Port", response.port, true)
        .setThumbnail("https://raw.githubusercontent.com/Geoluread-dev/Orange/master/assets/geolureadLogoBig.gif")
        .setFooter("6541");
      message.channel.send(embed);

      let embedEasy = new Discord.MessageEmbed()
        .setColor("#ff5733")
        .setDescription("_Or just copy the copypasta and paste it in de server ip form. Way easier ;)_")
        .addField("Copypasta", "147.135.160.192:25600")
      message.channel.send(embedEasy);

      console.log(response);
    });
  }
}
