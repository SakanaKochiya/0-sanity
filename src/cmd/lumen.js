const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "lumen",
    description: "idk",

    async run(message, args, client) {
        const embed = new MessageEmbed()
    .setColor(0x0099FF)
	.setTitle('Lumen')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns'})
	.setDescription('6★ Therapist Medic dễ dàng nhận được potential 6 thông qua shop event.')
	.setThumbnail('https://i.imgur.com/CKOyM3C.png')
	.addFields(
		{ name: 'Tổng Quan', value: op.lumen.ovr },
		{ name: '\u200B', value: '\u200B' },
		{ name: op.lumen.s1.name , value: op.lumen.s1.stats, inline: true },
		{ name: op.lumen.s2.name, value: op.lumen.s2.stats, inline: true },
	)
	.addFields({ name: op.lumen.s3.name, value: op.lumen.s3.stats, inline: true })
	.setImage('https://i.imgur.com/UNiiOWl.png')
	.setTimestamp()
	.setFooter({ text: `• Trait: ${trait.therapist}\n• ${op.lumen.pot}\n• ${op.lumen.trust}\n• ${terms.resist}\n• ${terms.abnormal}\n• ${terms.charged}\n• Total healing và HPS bao gồm đã và không ảnh hưởng bởi trait. `, iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [embed] });
    
	}
});
