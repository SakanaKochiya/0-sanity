const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "test",
    description: "Hệ tư tưởng Remind",

    async run(message, args, client) {
        const saileach = new MessageEmbed()
    .setColor(0x0099FF)
	.setTitle('Saileach')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Standard Bearer Vanguard operator.')
	.setThumbnail('https://i.imgur.com/ZJAjbCU.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Cũng giống như Myrtle và Elysium, Saileach lại thiêng về những nơi có content phải try hard như Contigency Contract nhờ khả năng buff và debuff trong toàn bộ talent và skill. Bạn không cần phải lo lắng gì nhiều nếu chưa sở hữu Saileach, Myrtle và Elysium vẫn làm tốt vai trò ở các content hiện tại của game. Và nếu bạn đắn đo nên nâng Saileach khi hiện tại đã nâng Myrtle và Elysium, thì bạn có thể nâng nếu bạn dư tài nguyên. Ví dụ skill 1 của Elysium và Saileach đều như nhau, nhưng bạn sẽ phải tốn nhiều tài nguyên để nâng cho Saileach.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Support γ', value: '`Nên Mastery 3`\nHồi DP.', inline: true },
		{ name: 'Skill 2 - Inheritance of Faith', value: '> Skill total healing: 4582.5\n> Average HPS: 104\n__Ưu điểm__\n• Cung cấp lượng lớn DP.\n• Bình HP di động.\n• Có thể hồi phục operators không thể được hồi phục theo cách chủ động.\n• Phù hợp talent 1.\n\n__Nhược điểm__\n• Chi phí SP cao.', inline: true },
	)
	.addFields({ name: "Skill 3 - Glorious Banner", value: '`Nên Mastery 3`\n> Skill total damage: 2382.9\n> Average DPS: 426\n__Ưu điểm__\n• Mini debuff.\n• Choáng AoE.\n• Phù hợp talent 1.\n\n__Nhược điểm__\n• Chi phí SP cao (cần Mastery 3 để giảm đi bất tiện này)', inline: true })
	.setImage('https://i.imgur.com/arpVXV1.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: không chặn địch khi kích hoạt kỹ năng.\n• Potential 5 tăng Talent 1.\n• Trust +40 ATK, +40 DEF. \n• Stun: làm choáng kẻ địch, không tấn công, không di chuyển.\n• Slow: giảm 80% tốc độ di chuyển.\n• Fragile: tăng sát thương phải nhận.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [saileach] });
    }
});
