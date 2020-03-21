const { bot } = require("../index");

bot.on("ready", () => {
  console.log("Peeling ;)")
  bot.user.setActivity("y'all fail.", { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
  //const guild = bot.guilds.cache.get("679776203074175079");
  //const role = guild.roles.cache.mapValues (role => console.log(role.name, role.id));
})
