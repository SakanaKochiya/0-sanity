const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require(`discord.js`)
const op = require("../data/op.json")
const trait = require("../data/trait.json")
module.exports = new Command({
    name: "pudding",
    description: "Tên ngon đấy :bantumlum:",

    async run(message, args, client) {
        const myrtle = new MessageEmbed()
    		.setColor(0x0099FF)
			.setTitle(`Pudding`)
			.setURL(`https://discord.gg/arknights-vns`)
			.setAuthor({ name: `Syalis`, iconURL: op.pudding.icon, url: `https://discord.gg/arknights-vns` })
			.setDescription(`4★Chain Caster nhận được thông qua mua trong shop`)
			.setThumbnail(`https://i.imgur.com/xxRBXOx.png`)
			.addFields(
				{ name: `Tổng Quan`, value: op.pudding.ovr },
				{ name: `\u200B`, value: `\u200B` },
				{ name: op.pudding.s1.name, value: op.pudding.s1.stats, inline: true },
				{ name: op.pudding.s2.name, value: op.pudding.s2.stats, inline: true },
			)
			.setImage(`https://i.imgur.com/N7BPOag.png`)
			.setTimestamp()
			.setFooter({ text: `• Trait: ${trait.chain}\n• ${op.pudding.trust}.`, iconURL: op.pudding.icon });

			message.channel.send({ embeds: [myrtle] });
    }
});
