const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "skingitano",
    description: "idk",

    async run(message, args, client) {
			const gitano1 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Elite 0")
				.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_109_fmout_1.png")
				.setTimestamp()
		
			const gitano2 = new MessageEmbed()
				.setColor(ranc())
				.setTitle("Elite 2")
				.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_109_fmout_2.png")
				.setTimestamp()
		
			
			message.channel.send({ embeds: [gitano1]})
			message.channel.send({ embeds: [gitano2]})
	}
});


function ranc() {
	var col = ["#000000", "#1ABC9C", "#11806A", "#57F287", "#1F8B4C", "#3498DB", "#206694", "#9B59B6", "#71368A", "#E91E63", "#AD1457", "#F1C40F", "#C27C0E", "#E67E22", "#A84300", "#ED4245", "#992D22", "#95A5A6", "#979C9F", "#7F8C8D", "#BCC0C0", "#34495E", "#2C3E50", "#FFFF00"]
	var rnd = Math.floor(Math.random() * col.length);
	return(col[rnd])
}