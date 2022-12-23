const makeEmbed = require('../Functions/makeEmbed');
module.exports = (msg, args, client)=>{
   const helpEmbed = makeEmbed('HELP',"**COMMANDS**",`**!Log Stats <@member>(Optional)** this command shows the tagged person stats or else yours in case you did not tag someone\n**!Log lb**  this shows the top 10 member ordred by their points`);
   msg.reply({embeds:[helpEmbed]});
}