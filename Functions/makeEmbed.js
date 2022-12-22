const { EmbedBuilder } = require('discord.js');
module.exports = (title,Name, text)=>{
const embed = new EmbedBuilder()
.setTitle(title)
.addFields({name:Name,value:text})
//.setThumbnail(iconUrl)
//.setAuthor({name:authorName})
//.setColor(color)
return embed;
}