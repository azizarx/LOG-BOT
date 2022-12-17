const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config');
let commandHandler = require('./commands');

const client = new Client({ 
  intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  
  ], 
});
client.on('ready',async () => {
  await console.log(`Logged in as ${client.user.tag}!`);
 });
 client.on('message',commandHandler);
client.login(process.env.TOKEN);
