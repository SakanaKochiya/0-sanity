const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "artjackie",
    description: "idk",

    async run(message, args, client) {
			const jackie1 = new MessageEmbed()
			.setColor("Random")
			.setTitle("Elite 0")
			.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_347_jaksel_1.png")
			.setTimestamp()

			const jackie2 = new MessageEmbed()
			.setColor("Random")
			.setTitle("Elite 2")
			.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_347_jaksel_2.png")
			.setTimestamp()

			const jackie3 = new MessageEmbed()
			.setColor("Random")
			.setTitle("Base")
			.setImage("https://gamepress.gg/arknights/sites/arknights/files/2020-10/JackiePokeGIF.gif")
			.setTimestamp()

			const jackie4 = new MessageEmbed()
			.setColor("Random")
			.setTitle("Deploy")
			.setImage("https://gamepress.gg/arknights/sites/arknights/files/2020-10/JackieDeployGIF.gif")
			.setTimestamp()

			const jackie5 = new MessageEmbed()
			.setColor("Random")
			.setTitle("Skill 2: Pay Close Attention!")
			.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/JackieS2GIF.gif")
			.setTimestamp()

			message.channel.send({ embeds: [jackie1]})
			message.channel.send({ embeds: [jackie2]})
			message.channel.send({ embeds: [jackie3]})
			message.channel.send({ embeds: [jackie4]})
			message.channel.send({ embeds: [jackie5]})

	}
});


function ranc() {
	var col = ["#000000", "#1ABC9C", "#11806A", "#57F287", "#1F8B4C", "#3498DB", "#206694", "#9B59B6", "#71368A", "#E91E63", "#AD1457", "#F1C40F", "#C27C0E", "#E67E22", "#A84300", "#ED4245", "#992D22", "#95A5A6", "#979C9F", "#7F8C8D", "#BCC0C0", "#34495E", "#2C3E50", "#FFFF00"]
	var rnd = Math.floor(Math.random() * col.length);
	return(col[rnd])
}