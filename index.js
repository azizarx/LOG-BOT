const { Client, Events, GatewayIntentBits,Partials, Collection } = require('discord.js');
require('dotenv/config') 
const fs = require('node:fs');
const path = require('node:path');
const {Guilds,GuildMembers,GuildMessages,MessageContent} = GatewayIntentBits;
const {User,Message,GuildMember, ThreadMember} = Partials;
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages,MessageContent],
  partials: [User,Message,GuildMember,ThreadMember]
});
const connectDB = require("./Configs/db");
const commandHandler = require('./Handlers/commandHandler.js');
//listening for msg commands
client.on(Events.MessageCreate,(msg)=>commandHandler(msg,client));
client.events = new Collection();
//command handeling for slash commands using the file system
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'slashCommands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}
//ends here.
const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);
//listening for slash commands
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
client.login(process.env.TOKEN);
connectDB(process.env.MONGO_URI);

