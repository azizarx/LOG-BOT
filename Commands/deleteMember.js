const memberC = require('../Controllers/Member.js');
const makeEmbed = require('../Functions/makeEmbed');
require('dotenv/config');
module.exports = async (msg, args, client)=>{
    if(msg.author.id == process.env.OWNER_ID || msg.author.id == "702185037210320996" || msg.author.id == "298751944288239618"  || msg.author.id == "630093221032361994"){
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