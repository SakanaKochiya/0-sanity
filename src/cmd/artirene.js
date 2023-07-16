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
        const artlumen = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Elite 0")
				.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4042_lumen_1.png')
				.setTimestamp()
			
			const artlumen1 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Elite 2")
				.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4042_lumen_2.png')
				.setTimestamp()
			
			const artlumen2 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Base")
				.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/LumenGIFPoke.gif')
				.setTimestamp()
			
			const artlumen3 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Deploy")
				.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/LumenGIFDeploy.gif')
				.setTimestamp()
			
			const artlumen4 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Skill 1: In Drizzle, Privation")
				.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LumenGIFS1.gif')
				.setTimestamp()
			
			const artlumen5 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Skill 2: In Downpour, Grace")
				.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LumenGIFS2.gif')
				.setTimestamp()
			
			const artlumen6 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Skill 2 (charged effect): In Downpour, Grace")
				.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LumenGIFS2Charged.gif')
				.setTimestamp()
			
			const artlumen7 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Skill 3: This Lantern Undying")
				.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LumenGIFS3.gif')
				.setTimestamp()
			



			message.channel.send({ embeds: [artlumen] });
			message.channel.send({ embeds: [artlumen1] });
			message.channel.send({ embeds: [artlumen2] });
			message.channel.send({ embeds: [artlumen3] });
			message.channel.send({ embeds: [artlumen4] });
			message.channel.send({ embeds: [artlumen5] });
			message.channel.send({ embeds: [artlumen6] });
			message.channel.send({ embeds: [artlumen7] });
	}
});


function ranc() {
	var col = ["#000000", "#1ABC9C", "#11806A", "#57F287", "#1F8B4C", "#3498DB", "#206694", "#9B59B6", "#71368A", "#E91E63", "#AD1457", "#F1C40F", "#C27C0E", "#E67E22", "#A84300", "#ED4245", "#992D22", "#95A5A6", "#979C9F", "#7F8C8D", "#BCC0C0", "#34495E", "#2C3E50", "#FFFF00"]
	var rnd = Math.floor(Math.random() * col.length);
	return(col[rnd])
}