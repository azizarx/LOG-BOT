const memberC = require('../Controllers/Member.js');
require('dotenv/config');
module.exports = async (msg, args, client)=>{
    if(msg.author.id == process.env.OWNER_ID){
       let res = await memberC.deleteMember(args[0]);
       if(!res){
        msg.reply('could not find user');
       }else{
        msg.reply('**User removed**');
       }
    }
}