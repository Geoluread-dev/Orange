module.exports = {
    name: "coords",
    description: "",
    execute(message, args){
        if(message.channel.id === "687772722213945434") {
            if(!args[1]) return message.channel.send("Make sure to type in the coords. Format x, y, z.");
            if(!args[2]) return message.channel.send("Make sure to type in all the coords. Missing y and z.");
            if(!args[3]) return message.channel.send("Make sure to type in all the coords. Only missing z.");
            if(!args[4]) return message.channel.send("Please give it a Title.");

            if(args[2] < 0 || args[2] > 256) return message.channel.send("That's not a valid y coord.");

            var x = parseInt(args[1]);
            var y = parseInt(args[2]);
            var z = parseInt(args[3]);
            const title = args[4];

            const embed = new MessageEmbed()
                .setTitle(title)
                .setColor("#ff5733")
                .setThumbnail(message.author.displayAvatarURL())
                .addField("x", x, true)
                .addField("y", y, true)
                .addField("z", z, true)
                .setTimestamp()
                .setFooter("This coord was provided by: " + message.author.username);
            
            const coords = bot.channels.cache.find(ch => ch.id === "688815377215782946");
            coords.send(embed);
        }
    }
}