const memberC = require("../../Controllers/Member");

module.exports =  {
    name:"ready",
    once: true,
    async execute(a,client){
        console.log('the client is now ready');
        client.user.setActivity("Log is your next level");
        try{
        const roles = ['Chiefs', 'Log Game Dev', 'Log Japanese Culture', 'Log Logistics&Events', 'Log Design', 'Log Marketing', 'Log Sponsoring'];
        const guild =  client.guilds.cache.get('792119525557796864');
        const allMembers = guild.members.fetch()
        .then((members) => members.forEach(member => {
            const hasRole = roles.some((roleName) => member.roles.cache.some((role) => role.name === roleName));
            if(hasRole) {
                memberC.createMember({id:`<@${member.user.id}>`,name:member.user.username});
                console.log(`Added ${member.user.username} to the data base.`);
            }
        })) 
       }catch(err){
        console.error(err);
       }
        
    }
}