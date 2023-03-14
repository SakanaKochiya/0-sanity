const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "giamonbathanh",
    description: "giamonbathanh",

    async run(message, args, client) {
        var messages6 = ['https://i.imgur.com/ZeFTbPZ.mp4','https://i.imgur.com/6q0tv95.mp4','https://i.imgur.com/hio2QgQ.mp4','https://i.imgur.com/MOhRWug.mp4','https://i.imgur.com/EsqZat1.mp4','https://i.imgur.com/dwNqwif.mp4','https://i.imgur.com/SBWtmuf.mp4'];
		var rnd6 = Math.floor(Math.random() * messages6.length);
		message.channel.send(messages6[rnd6])
    }
});
