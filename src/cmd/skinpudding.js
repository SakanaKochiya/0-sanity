const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "skinpudding",
    description: "idk",

    async run(message, args, client) {
		const spudding1 = new MessageEmbed()
		.setColor("Random")
		.setTitle("Icefield Messenger series - Gleaming Festive Fey")
		.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/PuddingSkin.jpeg')
		.setTimestamp()
	const spudding2 = new MessageEmbed()
		.setColor("Random")
		.setTitle("Base 1")
		.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/PuddingSkinGIFPoke.gif')
		.setTimestamp()
	const spudding3 = new MessageEmbed()
		.setColor("Random")
		.setTitle("Base 2")
		.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/PuddingSkinGIFBase.gif')
		.setTimestamp()
	const spudding4 = new MessageEmbed()
		.setColor("Random")
		.setTitle("Deploy")
		.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/PuddingSkinGIFDeploy.gif')
		.setTimestamp()
	
		message.channel.send({ embeds: [spudding4] });
		message.channel.send({ embeds: [spudding1] });
		message.channel.send({ embeds: [spudding2] });
		message.channel.send({ embeds: [spudding3] });
	}
});
