const memberC = require('../Controllers/Member.js');
module.exports = async (msg,args)=>{
    try{
        console.log(msg.author);
        hearts = Number(args[0]);
        let result = await memberC.editHearts(args[1],hearts);
        result ? msg.reply('modified hearts'): msg.react('❌');
    }catch(msg){
        msg.react('❌');
        console.error(msg);
    }

}