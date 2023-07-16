const Command = require("../structures/Command.js");
const config = require("../data/config.json");
const {MessageEmbed} = require('discord.js')
const op = require("../data/op.json")
const trait = require("../data/trait.json")
module.exports = new Command({
    name: "gitano",
    description: "not really Jakie but ok",

    async run(message, args, client) {
        const gitano = new MessageEmbed()
    		.setColor(0x0099FF)
			.setTitle('Gitano')
			.setURL('https://discord.gg/arknights-vns')
			.setAuthor({ name: 'Syalis', iconURL: op.gitano.icon, url: 'https://discord.gg/arknights-vns' })
			.setDescription('4★ Splash Caster')
			.setThumbnail('https://i.imgur.com/oiVnS7p.png')
			.addFields(
				{ name: 'Tổng Quan', value: op.gitano.ovr },
				{ name: '\u200B', value: '\u200B' },
				{ name: op.gitano.s1.name, value: op.gitano.s1.stats, inline: true },
				{ name: op.gitano.s2.name, value: op.gitano.s2.stats, inline: true },
			)
			.setImage('https://i.imgur.com/5bBqhuA.png')
			.setTimestamp()
			.setFooter({ text: `• Trait: ${trait.splash}\n• ${op.gitano.pot}\n• ${op.gitano.trust}.\n•Sát thương và DPS ở phía trên không bao gồm talent.` });

			message.channel.send({ embeds: [gitano] });
    }
});
