const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "haze",
    description: "uh... smth?",

    async run(message, args, client) {
        const embed = new MessageEmbed()
    .setColor(0x0099FF)
	.setTitle('Haze')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns'})
	.setDescription('4★ Core Caster')
	.setThumbnail('https://i.imgur.com/CKOyM3C.png')
	.addFields(
		{ name: 'Tổng Quan', value: op.haze.ovr },
		{ name: '\u200B', value: '\u200B' },
		{ name: op.haze.s1.name , value: op.haze.s1.stats, inline: true },
		{ name: op.haze.s2.name, value: op.haze.s2.stats, inline: true },
	)
	.setImage('https://i.imgur.com/KdWLTvu.png')
	.setTimestamp()
	.setFooter({ text: `• Trait: ${trait.core}\n• ${op.haze.pot}\n• ${op.haze.trust}\n• Thiên béo`, iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [embed] });
    
	}
});
