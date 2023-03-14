const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "imonfire",
    description: "YES IM ON FIRE, IGNITED BY A BURNING DESIRE",

    async run(message, args, client) {
        var messages = ['https://tenor.com/view/w-arknights-arknights-dance-gif-25199998','https://tenor.com/view/arknights-art-of-blade-eyjafjalla-hoshiguma-shining-gif-21361474','https://tenor.com/view/ejyafjalla-anime-arknights-gif-21228819','https://tenor.com/view/arknights-gif-22392540'];
		var rnd = Math.floor(Math.random() * messages.length);
		message.channel.send(messages[rnd])
    }
});
