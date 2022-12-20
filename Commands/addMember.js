const memberC = require('../Controllers/Member.js');
module.exports = async (msg,args, client)=>{
    if(!msg.author.bot && msg.author.id == "372142246331416579"){
    let memberObj = msg.mentions.users.first();
    if(memberObj &&!memberObj.bot){
        let res = await memberC.createMember({id:args[0],name:memberObj.username});
        await memberC.updateRank(args[0]);
        res ? msg.reply("**added**"):msg.reply("either user already exists or invalid arguments");
    }else{
        msg.reply('you cant this entity as a member');
    }
    
}else{
    msg.reply('you are not allowed to use this command');
}
}