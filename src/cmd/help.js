const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "help",
    description: "HELP!",

    async run(message, args, client) {
        const help = new MessageEmbed()
		.setColor("BLUE")
		.setTitle("Help")
		.setDescription("`.op`: xem tất cả lệnh liên quan đến operators.\n`.cnlist`: thông tin cn server.\n`.standard`: thông tin standard banner hiện tại.\n`.event`: thông tin sự kiện hiện tại.\n`.farm`: farm nguyên liệu.\n`.link`: các link liên quan đến game.")
		.setImage('https://i.imgur.com/KWYxkGD.png')
		.setTimestamp()
	
		message.channel.send({ embeds: [help] });
    }
});
