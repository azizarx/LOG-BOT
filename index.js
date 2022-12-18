const { Client, GatewayIntentBits,Partials, Collection } = require('discord.js');
require('dotenv/config') 
const {Guilds,GuildMembers,GuildMessages,MessageContent} = GatewayIntentBits;
const {User,Message,GuildMember, ThreadMember} = Partials;
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages,MessageContent],
  partials: [User,Message,GuildMember,ThreadMember]
});
client.events = new Collection();
const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);
client.login(process.env.TOKEN);


