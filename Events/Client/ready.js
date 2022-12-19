const memberC = require("../../Controllers/Member");
module.exports =  {
    name:"ready",
    once: true,
    async execute(a,client){
        console.log('the client is now ready');
        client.user.setActivity("Log is your next level"); 
    }
}