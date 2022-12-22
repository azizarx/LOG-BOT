const memberC = require('../Controllers/Member.js');
const makeEmbed = require('../Functions/makeEmbed')
module.exports = async (msg,args, client)=>{
    if(!msg.author.bot && msg.author.id == "372142246331416579"){
    let memberObj = msg.mentions.users.first();
    if(memberObj &&!memberObj.bot){
        let res = await memberC.createMember({id:args[0],name:memberObj.username});
        await memberC.updateRank(args[0]);
        res ? msg.reply(msg.reply({embeds:[makeEmbed('Success',"Operation","**Member Added**")]})):msg.reply(msg.reply({embeds:[makeEmbed('Rejected',"Problem","User not found")]}));
    }else{
        msg.reply({embeds:[makeEmbed('Rejected',"Problem","you can't add this entity as a member")]});
    }
    
}else{
    msg.reply({embeds:[makeEmbed('Rejected',"Problem","you are not allower to use this command")]});
}
}