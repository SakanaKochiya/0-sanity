const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
module.exports = new Command({
    name: "myrtle",
    description: "bà hoàng CC",

    async run(message, args, client) {
        const myrtle = new MessageEmbed()
    		.setColor(0x0099FF)
			.setTitle('Myrtle')
			.setURL('https://discord.gg/arknights-vns')
			.setAuthor({ name: 'Syalis', iconURL: op.myrtle.icon, url: 'https://discord.gg/arknights-vns' })
			.setDescription('4★ Standard Bearer Vanguard operator.')
			.setThumbnail('https://i.imgur.com/xxRBXOx.png')
			.addFields(
				{ name: 'Tổng Quan', value: op.myrtle.ovr },
				{ name: '\u200B', value: '\u200B' },
				{ name: op.myrtle.s1.name, value: op.myrtle.s1.stats, inline: true },
				{ name: op.myrtle.s2.name, value: op.myrtle.s2.stats, inline: true },
			)
			.setImage('https://i.imgur.com/7SOB34k.png')
			.setTimestamp()
			.setFooter({ text: `• Trait: ${trait.standard_bearer}\n• ${op.myrtle.pot}\n• ${op.myrtle.trust}.\n• Nên M6`, iconURL: op.myrtle.icon });

			message.channel.send({ embeds: [myrtle] });
    }
});
