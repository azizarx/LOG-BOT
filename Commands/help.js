const makeEmbed = require('../Functions/makeEmbed');
module.exports = (msg, args, client)=>{
   const helpEmbed = makeEmbed('HELP',"**COMMANDS**",`**!Log Stats <@Member(Optional)>**\n This command shows the tagged person stats or else yours in case you did not tag someone.\n**!Log Lb**\n  This command shows the top 10 members ordred by their points.`);
   msg.reply({embeds:[helpEmbed]});
}