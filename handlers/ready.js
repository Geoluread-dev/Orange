const { bot } = require("../index");
const { prefix } = require("../config.json");

bot.on("ready", () => {
  console.log("Peeling ;)")
  bot.user.setActivity("y'all fail.", { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
})
