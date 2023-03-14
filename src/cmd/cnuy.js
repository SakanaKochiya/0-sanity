const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "cnuy",
    description: "cnuy",

    async run(message, args, client) {
        var messages = ['https://i.imgur.com/Vb7Ga1h.mp4', 'https://imgur.com/8yB8ory', 'https://imgur.com/Q9z6K9f', 'https://imgur.com/roMyqMn', 'https://imgur.com/2FavKEA','https://imgur.com/6ZU6ghm','https://tenor.com/view/arknights-suzuran-suzuran-arknights-pat-gif-26031062','https://tenor.com/view/suzuran-%E9%88%B4%E8%98%AD-gif-23899006','https://tenor.com/view/suzuran-gif-24094104','https://tenor.com/view/arknights-suzuran-goldenglow-gg-gif-26560192','https://tenor.com/view/suzuran-gif-20369060'];
        var rnd = Math.floor(Math.random() * messages.length);
        message.channel.send(messages[rnd])
        
    }
});
