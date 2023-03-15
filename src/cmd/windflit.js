const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require(`discord.js`)
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "lumen",
    description: "idk",

    async run(message, args, client) {
        const windflit = new MessageEmbed()
    .setColor(0x0099FF)
	.setTitle(`Windflit`)
	.setURL(`https://discord.gg/arknights-vns`)
	.setAuthor({ name: `Syalis`, iconURL: `https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png`, url: `https://discord.gg/arknights-vns` })
	.setDescription(`5★ Artificer Supporter thuộc hội chân dài 1m80.`)
	.setThumbnail(`https://i.imgur.com/L6Uqg41.png`)
	.addFields(
		{ name: `Tổng Quan`, value: op.windflit.ovr },
		{ name: `\u200B`, value: `\u200B` },
		{ name: op.windflit.s1.name, value: op.windflit.s1.stats, inline: true },
		{ name: op.windflit.s2.name, value: op.windflit.s2.stats, inline: true },
	)
	.setImage(`https://i.imgur.com/VJAc3pV.png`)
	.setTimestamp()
	.setFooter({ text: `• Trait: ${trait.artificier}\n• ${op.windflit.pot}\n• ${op.windflit.trust}.\n• Sát thương và DPS ở phía trên không bao gồm thiết bị hỗ trợ cho bản thân.`, iconURL: `https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662` });

    message.channel.send({ embeds: [windflit] });
    
	}
});
