const { EmbedBuilder } = require('discord.js');
module.exports = (title, fieldName = null, fieldValue = null, description=null,color)=>{
const embed = new EmbedBuilder()
.setTitle(title)
if(fieldName)
embed.addFields({name:fieldName, value:fieldValue})
if (description)
    embed.setDescription(description)
if(color)
    embed.setColor(color)
//.setThumbnail(iconUrl)
//.setAuthor({name:authorName})
//.setColor(color)
return embed;
}