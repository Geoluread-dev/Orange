module.exports = {
  name: "server",
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
        value: "151.80.36.62",
        inline: true
      },
      {
        name: "Server Port",
        value: "25566",
        inline: true
      },
      {
        name: "Seed",
        value: "64093444"
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
        value: "151.80.36.62:25566"
      }
    ],
    footer: {
      text: "6541"
    }
  }
}
