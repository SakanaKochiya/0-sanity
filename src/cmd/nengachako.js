const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "nengachako",
    description: "nengachako",

    async run(message, args, client) {
        var messages = ['https://tenor.com/view/anime-arknights-gif-21966007','https://tenor.com/view/red-projekt-arknights-tail-provence-gif-22285642'];
		var rnd = Math.floor(Math.random() * messages.length);
		message.channel.send(messages[rnd])
    }
});
