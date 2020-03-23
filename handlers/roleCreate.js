const { bot } = require("../index");
const fs = require("fs");

bot.on("roleUpdate", newRole => {
  var obj = {
    roles: []
  };

  newRole.guild.roles.cache.forEach(role => {
    obj.roles.push({name: role.name, id: new Number(role.id)});

    var json = JSON.stringify(obj);

    fs.writeFile("./logs/roles.json", json, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
  console.log("JSON Updated!");
})
