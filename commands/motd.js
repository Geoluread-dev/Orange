const ping = require('minecraft-server-util');

module.exports = {
  name: "motd",
  description: "",
  permission: ["679776203074175079"],
  execute(Discord, bot, message, args) {
    ping('147.135.160.192', 25600, (error, response) => {
      message.channel.send(response.descriptionText);
    })
  }
}
