const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "xincaituoi",
    description: "idfk what to write here",

    async run(message, args, client) {
        var messages = ['https://i.imgur.com/M8iuwTW.mp4','https://i.imgur.com/nHeuyGw.mp4','https://i.imgur.com/yiFjLDp.mp4'];
		var rnd = Math.floor(Math.random() * messages.length);
		message.channel.send(messages[rnd])
        
    }
});
