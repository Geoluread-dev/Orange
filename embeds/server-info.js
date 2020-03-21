module.exports = {
  name: "server-info",
  embed: {
    title: "**Server Information**",
    description: "Don't forget to add the port in the server ip form. Format:\n > `Server IP : Server Port`.",
    color: 0xff5733,
    author: {
      name: "Geoluread",
      iconURL: "https://raw.githubusercontent.com/Geoluread-dev/Orange/master/assets/geolureadLogo.gif"
    },
    fields: [
      {
        name: "Server IP",
        value: "147.135.160.192",
        inline: true
      },
      {
        name: "Server Port",
        value: "25600",
        inline: true
      }
    ],
    thumbnail: {
      url: "https://raw.githubusercontent.com/Geoluread-dev/Orange/master/assets/geolureadLogoBig.gif"
    },
    footer: {
      text: "6541"
    }
  },
  embed1: {
    description: "_Or just copy the copypasta and paste it in de server ip form. Way easier ;)_",
    color: 0xff5733,
    fields: [
      {
        name: "Copypasta",
        value: "147.135.160.192:25600"
      }
    ],
    footer: {
      text: "6541"
    }
  }
}
