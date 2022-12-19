const memberC = require("../../Controllers/Member");
module.exports =  {
    name:"ready",
    once: true,
    async execute(a,client){
        console.log('the client is now ready');
        client.user.setActivity("Log is your next level"); 
        memberC.createMember({
            id:'<@372142246331416579>',
            name: 'Azizar Himself',
            points:5,
            hearts:3,
            rank:"unranked"
        })
    }

}