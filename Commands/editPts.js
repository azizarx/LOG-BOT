const memberC = require('../Controllers/Member.js');
module.exports = async (msg,args)=>{
    try{
        pts = Number(args[0]);
        let result = await memberC.AddPoints(args[1],pts);
        result ? msg.reply('modified points'): msg.react('❌');
    }catch(msg){
        msg.react('❌');
        console.error(msg);
    }

}