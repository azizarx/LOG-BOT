const memberC = require('../Controllers/Member.js');
module.exports = async (msg,args)=>{
    try{
        if(msg.author.id == '372142246331416579'){
        pts = Number(args[0]);
        let Before = await memberC.getMemberByID(args[1]);
        let oldRank = Before[0].rank;
        let result = await memberC.editPoints(args[1],pts);
        result ? msg.reply('modified points'): msg.react('❌');
        await memberC.updateRank(args[1]);
        let After = await memberC.getMemberByID(args[1]);
        let newRank = After[0].rank;
        if(pts < 0 && oldRank != newRank){
            msg.reply('Member **Demoted** ⬇️');
        }else if(pts > 0 && oldRank != newRank){
            msg.reply('Member **Promoted** ⬆️');
        }
    }else{
        msg.reply('you are not allowed to do that');
    }
    }catch(err){
        msg.react('❌');
        console.error(err);
    }

}