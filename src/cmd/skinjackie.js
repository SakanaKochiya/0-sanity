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
		
			const sjackie2 = new MessageEmbed()
			.setColor("Random")
			.setTitle("Base 1")
			.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/JackieSkinGIFPoke.gif")
			.setTimestamp()
		
			const sjackie3 = new MessageEmbed()
			.setColor("Random")
			.setTitle("Base 2")
			.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/JackieSkinGIFBase.gif")
			.setTimestamp()
				
			const sjackie4 = new MessageEmbed()
			.setColor("Random")
			.setTitle("Deploy")
			.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/JackieSkinGIFDeploy.gif")
			.setTimestamp()
		
			message.channel.send({ embeds: [sjackie2]})
			message.channel.send({ embeds: [sjackie3]})
			message.channel.send({ embeds: [sjackie4]})
		
	}
});
