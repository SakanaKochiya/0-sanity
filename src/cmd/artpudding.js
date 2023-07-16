const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
const terms = require("../data/terms.json")

module.exports = new Command({
    name: "artpudding",
    description: "idk",

    async run(message, args, client) {
    const pudding1 = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle("Elite 0")
		.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4004_pudd_1.png')
		.setTimestamp()
	const pudding2 = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle("Elite 2")
		.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4004_pudd_2.png')
		.setTimestamp()
	const pudding3 = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle("Base")
		.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/PuddingGIFPoke.gif')
		.setTimestamp()
	const pudding4 = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle("Deploy")
		.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/PuddingGIFDeploy.gif')
		.setTimestamp()
	const pudding5 = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle("Skill 2: Diffusion Current")
		.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PuddingGIFS2.gif')
		.setTimestamp()

	message.channel.send({ embeds: [pudding1] });
	message.channel.send({ embeds: [pudding2] });
	message.channel.send({ embeds: [pudding3] });
	message.channel.send({ embeds: [pudding4] });
	message.channel.send({ embeds: [pudding5] });

	}
});
