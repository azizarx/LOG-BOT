const memberC = require("../../Controllers/Member");
module.exports =  {
    name:"ready",
    once: true,
    execute(){
        console.log('the client is now ready');
    }

}