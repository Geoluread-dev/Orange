const { bot } = require("../index");
const fs = require("fs");

bot.on("guildMemberAdd", member => {
  var obj = {
    members: []
  };

  member.guild.members.cache.forEach(member => {
    obj.members.push({id: new Number(member.id)});

    var json = JSON.stringify(obj);

    fs.writeFile("./logs/members.json", json, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
  console.log("JSON updated!");
})
