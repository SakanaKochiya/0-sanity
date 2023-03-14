/** @format */

//console.clear();


const Client = require("./structures/Client.js");

const Command = require("./structures/Command.js");

const config = require("./data/config.json");

const client = new Client();

const fs = require("fs");



//normal command
fs.readdirSync("./src/cmd")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./cmd/${file}`);
		console.log(`Command ${command.name} lock and loaded`);
		client.commands.set(command.name, command);
	});


//On starting
client.on("ready", () => {
	console.log("ready")
	client.user.setStatus('online');
    client.user.setActivity({type: `WATCHING`, name:`guide`})
});


//normal command/easter eggs uses
client.on("messageCreate", message => {
	//console.log(message.author.tag,"in ",message.channel.name,`: `, message.content);

	if (message.author.bot) return;

	//if (!start === config.prefix) return;

	//if (!message.content.toLowerCase().startsWith(config.prefix)) return;

	if(message.content.slice(0, config.prefix.length).toLowerCase() !== config.prefix) return; 

	const args = message.content.substring(config.prefix.length).split(/ +/);

	var command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) var command = client.commands.find(cmd => cmd.alias == args[0]);

	command.run(message, args, client);
});


client.login(config.token);