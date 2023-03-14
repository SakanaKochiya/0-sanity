const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "justsurtrit",
    description: "cnuy",

    async run(message, args, client) {
        var messages = ['https://tenor.com/view/surtr-arknights-just-use-surtr-gif-24975177','https://tenor.com/view/surtrwangy-gif-22090121'];
	    var rnd = Math.floor(Math.random() * messages.length);
		message.channel.send(messages[rnd])
        
    }
});
