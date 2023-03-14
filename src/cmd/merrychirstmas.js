const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "merrychirstmas",
    description: "And a happy niu dia",

    async run(message, args, client) {
        var messages = ['https://tenor.com/view/arknights-bell-smile-cute-adorable-gif-16533931','https://tenor.com/view/arknights-goldenglow-trumpet-toothache-gif-27230102'];
		var rnd = Math.floor(Math.random() * messages.length);
		message.channel.send(messages[rnd])
        
    }
});
