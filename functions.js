const fs = require("fs");

module.exports = (bot) => {
  fs.readdir("./handlers/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(file => file.endsWith(".js"));
    if (jsfiles.length <= 0) return console.log("There are no events to load...");
    console.log(`Loading ${jsfiles.length} events...`)
    jsfiles.forEach((f, i) => {
      require(`./handlers/${f}`);
      console.log(`${i + 1}: ${f} loaded!`)
    })
  })

  fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(file => file.endsWith(".js"));
    if (jsfiles.length <= 0) return console.log("There are no commands to load...");
    console.log(`Loading ${jsfiles.length} commands...`)
    jsfiles.forEach((f, i) => {
      let command = require(`./commands/${f}`);
      console.log(`${i + 1}: ${f} loaded!`);
      bot.commands.set(command.name, command)
    })
  })
}
