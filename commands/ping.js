module.exports = (msg)=>{
    try{
        msg.channel.send("Loading data..").then(async msg1=>{
    
            msg.reply(`${msg1.createdTimestamp - msg.createdTimestamp} ms `);
            await msg1.delete();
    
        })
    } catch(err){console.log(err)
 }
}