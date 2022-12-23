const ping = require('../Commands/ping.js');
const editpts = require('../Commands/editPts.js');
const edithts = require('../Commands/editHearts.js');
const stats = require('../Commands/stats.js');
const addm = require('../Commands/addMember');
const delm = require('../Commands/deleteMember.js');
const lb = require('../Commands/lb.js');
const help = require('../Commands/help.js');
const commands = { ping, editpts, edithts, stats, addm, delm, lb, help };
module.exports = async function (msg, client){
    try{    
    let tokens = msg.content.toLowerCase().split(" ");
    let prefix = tokens.shift();
    if(prefix.toLowerCase() =="!log"){
        let command = tokens.shift();
        commands[command](msg, tokens, client);
    }
}catch(err){
    msg.reply("invalid commad use **!log help** command to see the available commands");
}
}