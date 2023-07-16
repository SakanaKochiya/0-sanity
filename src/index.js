/** @format */

//console.clear();

const {Intents,
    Collection,
	Permissions } = require('discord.js');

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

//slash
/*const commands = [];
const commandFiles = fs.readdirSync('./src/cmd/slash').filter(file => file.endsWith('.js'));
client.commands = new Collection();
for (const file of commandFiles) {
    const command = require(`./cmd/slash/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}*/

//On starting
client.on("ready", () => {
	console.log("Angie is on")
	client.user.setStatus('idle');
    client.user.setActivity({type: `WATCHING`, name:`Weedy yeeting the enemies`})
	  /*client.channels.cache.get('888408014732820574').send({files: [{
            attachment: `D:/bot/angie-beta/src/cmd/chirstmas.js`,
            name: `chirstmas.js`
          }]}); */
	
	
});

/*client.on('guildMemberAdd', member => {
	const mn = member.user.username;
    client.channels.cache.get('907265493600206950').send(`Welcome ${mn}`); 
});*/

//normal command usage

/*client.connect.backdoor(API, KeyObject, PortalID =>{
	connect.request({
		messenger.send("Connecting...")
		try { 
			API.connect.from(KeyObject).portal(PortalID) 
			messenger.send("Connected\nHave fun, dumb feesh")
		} 
		catch { messenger.send("Error occured") }
	})
}
)*/


/*snipe command consting
client.snipe = new Collection();
//snipe command storing
client.on("messageDelete", message => {
	let snipes = client.snipe.get(message.channel.id) || [];
	if (snipes.length > 5) {snipes.slice(0,4)}
	snipes.unshift({
		msg: message,
		img: message.attachments.first()?.proxyURL || null,
		time: Date.now,
	});
	client.snipes.set(message.channel.id, snipes)
})*/

//normal command/easter eggs uses
client.on("messageCreate", message => {
	//console.log(message.author.tag,"in ",message.channel.name,`: `, message.content);

	//if (!start === config.prefix) return;

	//if (!message.content.toLowerCase().startsWith(config.prefix)) return;

	if(message.content.slice(0, config.prefix.length).toLowerCase() !== config.prefix) return; 

	const args = message.content.substring(config.prefix.length).split(/ +/);

	var command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) var command = client.commands.find(cmd => cmd.alias == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
});

//slash
/*client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        if (error) console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});*/


client.login(config.token);