const memberC = require("../../Controllers/Member");
module.exports =  {
    name:"ready",
    once: true,
    execute(a,client){
        console.log('the client is now ready');
        client.user.setActivity("Games like usual"); 
    }

}