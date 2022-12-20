const ping = require('../Commands/ping.js');
const editpts = require('../Commands/editPts.js');
const edithearts = require('../Commands/editHearts.js');
const stats = require('../Commands/stats.js');
const addmember = require('../Commands/addMember');
const deletemember = require('../Commands/deleteMember.js');
const commands = { ping,editpts,edithearts,stats,addmember,deletemember };
module.exports = async function (msg, client){
    let tokens = msg.content.toLowerCase().split(" ");
    let prefix = tokens.shift();
    if(prefix.toLowerCase() =="!log"){
        let command = tokens.shift();
        commands[command](msg, tokens, client);
    }
}