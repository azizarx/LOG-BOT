const ping = require('../Commands/ping.js');
const editpts = require('../Commands/editPts.js');
const edithearts = require('../Commands/editHearts.js');
const commands = { ping,editpts,edithearts };
module.exports = async function (msg){
    let tokens = msg.content.toLowerCase().split(" ");
    let prefix = tokens.shift();
    if(prefix.toLowerCase() =="!log"){
        let command = tokens.shift();
        commands[command](msg, tokens);
    }
}