const memberC = require('../Controllers/Member.js');
module.exports = async (msg,args)=>{
    try{
        if(msg.author.id == '372142246331416579' || msg.author.id == "702185037210320996" || msg.author.id == "298751944288239618" || msg.author.id == "630093221032361994"){
        if(!args[1]){
            msg.reply("you didn't spesify the member")
            return
        }
        pts = Number(args[0]);
        let Before = await memberC.getMemberByID(args[1]);
        let oldRank = Before[0].rank;
        console.log(oldRank);
        let result = await memberC.editPoints(args[1],pts);
        result ? msg.reply('modified points'): msg.react('❌');
        await memberC.updateRank(args[1]);
        let After = await memberC.getMemberByID(args[1]);
        let newRank = After[0].rank;
        console.log(newRank);
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