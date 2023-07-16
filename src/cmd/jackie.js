const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
module.exports = new Command({
    name: "jackie",
    description: "not really Jakie but ok",

    async run(message, args, client) {
        const jackie = new MessageEmbed()
    		.setColor(0x0099FF)
			.setTitle('Jackie')
			.setURL('https://discord.gg/arknights-vns')
			.setAuthor({ name: 'Syalis', iconURL: op.jackie.icon, url: 'https://discord.gg/arknights-vns' })
			.setDescription('4★ Fighter Guard operator có hình dáng giống Korone)')
			.setThumbnail('https://i.imgur.com/TG98wHx.png')
			.addFields(
				{ name: 'Tổng Quan', value: op.jackie.ovr },
				{ name: '\u200B', value: '\u200B' },
				{ name: op.jackie.s1.name, value: op.jackie.s1.stats, inline: true },
				{ name: op.jackie.s2.name, value: op.jackie.s2.stats, inline: true },
			)
			.setImage('https://i.imgur.com/5bBqhuA.png')
			.setTimestamp()
			.setFooter({ text: `• Trait: ${trait.brawler}\n• ${op.jackie.pot}\n• ${op.jackie.trust}.\n•Sát thương và DPS ở phía trên không bao gồm talent.` });

			message.channel.send({ embeds: [jackie] });
    }
});
