const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')

module.exports = new Command({
    name: "4fun",
    description: "Hệ tư tưởng Remind",

    async run(message, args, client) {
        const lmaofun = new MessageEmbed()
		.setColor("RED")
		.setTitle("For Fun")
		.setDescription(".news, .gay, .cnuy, .wtf, .merrychristmas, .tamphaitinh, .justsurtrit, nengachako, .imonfire, .maychetvoitao, .trungrate, .nani, .bnuy, .psuy, .segg, .dmgame, .giamonbathanh, tannhungkophe, xincaituoi, .imamedicbut\n.bhbi : behind the scene break the ice\n.bhga : behind the scene guilding ahead\n.bhnl : behind the scene near light\n.s(number)kaltsit: meme kaltsit (gồm 1, 2, 3)\n.s(number)goldenglow: meme goldenglow (gồm 1,2)\n.s(number)w: meme w (gồm 1,2)\n.s(number)ceobe: meme ceobe (gồm 1, 2, 3, 4, 5)\n.s(number)zima: meme zima (gồm 1, 2, 3)\n.s1ifrit, .s1magallan, .s1exusiai")
		.setTimestamp()
	
		message.channel.send({ embeds: [lmaofun] });
    }
});
