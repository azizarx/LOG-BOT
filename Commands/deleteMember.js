const memberC = require('../Controllers/Member.js');
const makeEmbed = require('../Functions/makeEmbed');
require('dotenv/config');
module.exports = async (msg, args, client)=>{
    if(msg.author.id == process.env.OWNER_ID){
       let res = await memberC.deleteMember(args[0]);
       if(!res){
        msg.reply({embeds:[makeEmbed('Rejected',"Problem","User not found")]});
       }else{
        msg.reply({embeds:[makeEmbed('Success',"Operation","Member Removed")]});
       }
    }else{
        msg.reply({embeds:[makeEmbed('Rejected',"Problem","you are not allower to use this command")]});
    }
}