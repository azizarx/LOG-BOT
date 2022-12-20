const memberC = require('../Controllers/Member.js');
module.exports = async (msg,args)=>{
    try{
        if(msg.author.id == '372142246331416579'){
        hearts = Number(args[0]);
        let result = await memberC.editHearts(args[1],hearts);
        result ? msg.reply('modified hearts'): msg.react('❌');
    }else{
        msg.reply('you are not allowed to use this command');
    }
    }catch(msg){
        msg.react('❌');
        console.error(msg);
    }

}