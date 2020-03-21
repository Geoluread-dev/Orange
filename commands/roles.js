module.exports = {
  name: "roles",
  description: "",
  permission: ["684373684764278806"],
  execute(Discord, bot, message, args) {
    message.guild.roles.cache.forEach(role => console.log(role.name, role.id));
  }
}
