const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "irene",
    description: "kiana Arknights ver.",

    async run(message, args, client) {
        const embed = new MessageEmbed()
    .setColor(0x0099FF)
	.setTitle('Irene')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns'})
	.setDescription('6★ Swordmaster Guard được mệnh danh là Yasuo.')
	.setThumbnail('https://i.imgur.com/CKOyM3C.png')
	.addFields(
		{ name: 'Tổng Quan', value: op.irene.ovr },
		{ name: '\u200B', value: '\u200B' },
		{ name: op.irene.s1.name , value: op.irene.s1.stats, inline: true },
		{ name: op.irene.s2.name, value: op.irene.s2.stats, inline: true },
	)
	.addFields({ name: op.irene.s3.name, value: op.irene.s3.stats, inline: true })
	.setImage('https://i.imgur.com/ZkfLx4b.png')
	.setTimestamp()
	.setFooter({ text: `• Trait: ${trait.swordmaster}\n• ${op.irene.pot}\n• ${op.irene.trust}\n• ${terms.levitate}\n• ${terms.abnormal}`, iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [embed] });
    
	}
});
