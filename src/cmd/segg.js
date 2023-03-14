const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "segg",
    description: "OWAAAAAAAAAAAAAAA",

    async run(message, args, client) {
        var messages = ['https://i.imgur.com/RtzTxDK.mp4','https://i.imgur.com/1ehkiQ3.mp4','https://i.imgur.com/YN22fTt.mp4','https://i.imgur.com/JSjoe6N.mp4','https://i.imgur.com/0jwnZRb.mp4','https://i.imgur.com/xunZNym.mp4','https://i.imgur.com/iemzmXR.mp4'];
        var rnd = Math.floor(Math.random() * messages.length);
        message.channel.send(messages[rnd])
    }
});
