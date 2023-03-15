const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "artlumen",
    description: "idk",

    async run(message, args, client) {
        const artwindflit1 = new MessageEmbed()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_433_windft_1.png')
	.setTimestamp()
		const artwindflit2 = new MessageEmbed()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_433_windft_2.png')
	.setTimestamp()
		const artwindflit3 = new MessageEmbed()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/WindflitGIFPoke.gif')
	.setTimestamp()
		const artwindflit4 = new MessageEmbed()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/WindflitGIFDeploy.gif')
	.setTimestamp()
		const artwindflit5 = new MessageEmbed()
	.setColor("Random")
	.setTitle("Skill 1: Machine Rapport")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/WindflitGIFS1.gif')
	.setTimestamp()
		const artwindflit6 = new MessageEmbed()
	.setColor("Random")
	.setTitle("Skill 2: Energy Rapport")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/WindflitGIFS2.gif')
	.setTimestamp()
			



			message.channel.send({ embeds: [artwindflit1] });
			message.channel.send({ embeds: [artwindflit2] });
			message.channel.send({ embeds: [artwindflit3] });
			message.channel.send({ embeds: [artwindflit4] });
			message.channel.send({ embeds: [artwindflit5] });
			message.channel.send({ embeds: [artwindflit6] });
	}
});
