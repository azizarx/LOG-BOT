const memberC = require("../Controllers/Member");
const { EmbedBuilder } = require('discord.js');
module.exports = async (msg, args, client)=>{
    let data = await memberC.getAllMembers();
    data.sort((a,b)=> b.points - a.points )
    data.length > 10 ? data = data.slice(0,9) : data;
    let owner = await client.users.fetch("372142246331416579");
    let lb = new EmbedBuilder()
    .setAuthor({name:`${msg.author.username}#${msg.author.discriminator}`,iconURL:`https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}`})
    .setTitle("\t🏆LeaderBoard🏆")
    .setColor(msg.member.displayHexColor)
    .setThumbnail("https://cdn.discordapp.com/attachments/1053337914202914886/1055491258820341840/icons8-podium-100.png")
    .setFooter({text: `Made with ❤️ by ${owner.username}#${owner.discriminator}`,
    iconURL:`https://cdn.discordapp.com/avatars/372142246331416579/${owner.avatar}`})
    
   for(element of data){
    lb.addFields({name:`__${element.name}__`,
    value:`**Points: **${element.points}\n**Rank: **${element.rank}`})
   }
    msg.reply({embeds:[lb]})
}