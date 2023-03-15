const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require(`discord.js`)
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "specter2",
    description: "SA, MOTTO MOTTO YO",

    async run(message, args, client) {
        const skadialter = new MessageEmbed()
	    	.setColor(0x0099FF)
			.setTitle(`Skadi the Corrupting Heart`)
			.setURL(`https://discord.gg/arknights-vns`)
			.setAuthor({ name: `Syalis`, iconURL: `https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png`, url: `https://discord.gg/arknights-vns` })
			.setDescription(`6★ Bard Supporter thuộc Limited operator.`)
			.setThumbnail(`https://i.imgur.com/zoG6kiU.png`)
			.addFields(
				{ name: `Tổng Quan`, value: op.skalter.ovr },
				{ name: `\u200B`, value: `\u200B` },
				{ name: op.skalter.s1.name, value: op.skalter.s1.stats, inline: true },
				{ name: op.skalter.s2.name, value: op.skalter.s2.stats, inline: true },
			)
			.addFields({ name: op.skalter.s3.name, value: op.skalter.s3.stats, inline: true })
			.setImage(`https://i.imgur.com/Q1isrQA.png`)
			.setTimestamp()
			.setFooter({ text: `• Trait: ${trait.bard}\n• ${op.skalter.pot}\n• ${op.skalter.trust} \n• ${terms.inspire}`, iconURL: `https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662` });

    message.channel.send({ embeds: [skadialter] });
	}
});
