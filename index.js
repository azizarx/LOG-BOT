const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config') 
const client = new Client({ 
  intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  
  ], 
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.content == "!ping"){
    message.reply('pong');
  }
});

client.login(process.env.TOKEN);
