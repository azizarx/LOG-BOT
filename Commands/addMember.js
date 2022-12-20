const memberC = require('../Controllers/Member.js');
module.exports = async (msg,args)=>{
    let res = await memberC.createMember({id:args[0],name:args[1]});
    res ? msg.reply("added"):msg.reply("either user already exists or invalid arguments");
}