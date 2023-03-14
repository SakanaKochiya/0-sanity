const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "op",
    description: "List các Operators",

    async run(message, args, client) {
        const op = new MessageEmbed()
		.setColor("AQUA")
		.setTitle("Operator")
		.setDescription("`.(tên operator)`: thông tin operator.\n`.art(tên operator)`: animation của operator.\n`.skin(tên operator)`: animation về skin của operator.\n`.l2d(skin)(tên operator)`: l2d về operator hoặc skin của operator đó.")
		.setImage('https://i.imgur.com/6PvwSp9.png')
		.setTimestamp()
	
		message.channel.send({ embeds: [op] });
    }
});
