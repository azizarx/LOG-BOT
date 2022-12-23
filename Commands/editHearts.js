const memberC = require('../Controllers/Member.js');
const makeEmbed = require('../Functions/makeEmbed');
module.exports = async (msg,args)=>{
    try{
        if(msg.author.id == '372142246331416579' || msg.author.id == "702185037210320996"){
        if(!args[1]){
            msg.reply("you didn't spesify the member")
            return
         }
        hearts = Number(args[0]);
        let result = await memberC.editHearts(args[1],hearts);
        result ? msg.reply('modified hearts'): msg.react('❌');
    }else{
        msg.reply({embeds:[makeEmbed('Rejected',"Problem","you are not allower to use this command")]});
    }
    }catch(msg){
        msg.react('❌');
        console.error(msg);
    }

}