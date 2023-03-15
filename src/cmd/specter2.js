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
        const specteralter = new MessageEmbed()
		    .setColor(0x0099FF)
			.setTitle(`Specter the Unchained`)
			.setURL(`https://discord.gg/arknights-vns`)
			.setAuthor({ name: `Syalis`, iconURL: `https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png`, url: `https://discord.gg/arknights-vns` })
			.setDescription(`6★ Dollkeeper Specialist limited operator.`)
					.setThumbnail(`https://i.imgur.com/PVQr7wv.png`)
			.addFields(
				{ name: `Tổng Quan`, value: op.specalter.ovr },
				{ name: `\u200B`, value: `\u200B` },
				{ name: op.specalter.s1.name, value: op.specalter.s1.stats, inline: true },
				{ name: op.specalter.s2.name, value: op.specalter.s2.stats, inline: true },
			)
			.addFields({ name: op.specalter.s3.name, value: op.specalter.s3.stats, inline: true })
			.setImage(`https://i.imgur.com/dhtJvlY.png`)
			.setTimestamp()
			.setFooter({ text: `• Trait: ${trait.dollkeeper}\n• ${op.specalter.pot}.\n• ${op.specalter.trust}`, iconURL: `https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662` });

			message.channel.send({ embeds: [specteralter] });
	}
});
