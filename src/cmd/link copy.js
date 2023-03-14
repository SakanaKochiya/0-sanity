const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "link",
    description: "sauce?",

    async run(message, args, client) {
        const link = new MessageEmbed()
		.setColor("Random")
		.setTitle("Link")
		.setDescription("Thông tin về module: https://bit.ly/3JdB9E1\nThông tin về địch (sẽ được cập nhật thêm): https://bit.ly/3zOmf4p\nTra tag recruit, xem thông tin Operators, lên kế hoạch nâng Operator: https://aceship.github.io/\nLên kế hoạch nâng Operator: https://samidare.io/arknights/planner\nTra tỉ lệ rớt nguyên liệu ở các màn: https://penguin-stats.io/\nGiả lập Operators hiện có, giúp bạn không cần thiết vào game để show Operators khi nhờ tư vấn: https://www.krooster.com/\nThông tin relics trong IS2: https://bit.ly/3QybdX1\nGiả lập map: https://map.ark-nights.com/map\nXem skins: https://kokodayo.fun/skins\nTrang chủ Arknights official: https://www.arknights.global/\nMonster Siren: https://monster-siren.hypergryph.com/\nOfficial website IS2: https://arknights.global/crimsonsolitaire/")
		.setTimestamp()
	
		message.channel.send({ embeds: [link] });
    }
});
