const prefix = "!";
let ping = require('./commands/ping');
let commands = {ping};
module.exports = async (msg) =>{
    if (msg.author.bot) return;
	if (!msg.content.startsWith(prefix)) return;
    let args = msg.content.split(" ")
    let command = args.shift();
    if (command.charAt(0)==prefix){
        command = command.substring(1).toLowerCase()
        commands[command](msg,args)
}}