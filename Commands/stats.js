const { EmbedBuilder } = require('discord.js');
const  memberC = require('../Controllers/Member.js');
const  makeEmbed = require('../Functions/makeEmbed.js');
const ranksIcon = {
    "unranked":"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/320585227_512001617575148_3662981354600453969_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=dgrLw_6zj80AX-R3a0l&_nc_ht=scontent.ftun1-2.fna&oh=03_AdR-ZgOVFtJ-bNrnzagz7CsTKqC46o8EG7NC6dOVIa6TBg&oe=63C80E90",
    "silver":"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/320735218_840007447211272_1518004261434115660_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=CsnrL3dx0sAAX8rvJeE&_nc_ht=scontent.ftun1-2.fna&oh=03_AdQZTB5dLMeVxSGVRaMyt4CUgKmlSklE0j50KjnvA7suxw&oe=63C7FC1F",
    "gold":"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/320429898_932983051442314_5273710721246869459_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RLRVqPfE6MsAX_bc70M&_nc_ht=scontent.ftun1-2.fna&oh=03_AdSIJSShS0nmTrDQsY4A29AYpK_uIELH2fOL0TcZfGiJmQ&oe=63C7DACF",
    "platinium":"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/320578482_1313259649509266_4024169747988549147_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=COypVcRV-c4AX-AALgS&_nc_ht=scontent.ftun1-2.fna&oh=03_AdQkz43X_cdM3aXFrav-z6O4CKzxw2M6GKsgD1ggVUBPkQ&oe=63C804F1",
    "emerald":"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/320742960_1201506947409394_4692863325155142074_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=3jy-sor6mW8AX9Kyh2J&_nc_ht=scontent.ftun1-2.fna&oh=03_AdQoIG8c4v0cHwee114t4QZ7z5p1v-ZxbbfjliLXKVraew&oe=63C7DBF7",
    "logger":"https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/320383891_652527159996212_162914592375142156_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6Nu_1r2CVZYAX-APYvg&_nc_ht=scontent.ftun1-2.fna&oh=03_AdRkXjyJJKalfwiN_LjRq3SBiXSHl1y0KnbxO8cJjuW4bg&oe=63C7FAF2"
}
module.exports = async (msg,args,client)=>{
    try{   
        let owner = await client.users.fetch("372142246331416579");
        let id = args[0] || `<@${msg.author.id}>`;
        let data = await memberC.getMemberByID(id)
        if(data.length == 0){
            msg.reply({embeds:[makeEmbed('Member Not Found',null,null,`⛔ - Invalid Input, please mention a valid member!`,'Red')]});
            msg.react('❌')
            return
        }
        data = data[0];
        var half = 0;
        data.hearts % 1 == 0.5 ? half = 1 : half = 0;
        const stats = new EmbedBuilder()
        .setAuthor({name:`${msg.author.username}#${msg.author.discriminator}`,iconURL:`https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}`})
        .setTitle("✨**Stats**✨")
        .setColor(msg.member.displayHexColor)
        .setThumbnail(ranksIcon[data.rank.toLowerCase()])
        .addFields(
            {name:'Name',value:data.name},
            {name:"Points",value:data.points.toString(), inline:true},
            {name:"Hearts",value:`${" <:LOG_HEART:1054413126390526043>".repeat(data.hearts)}${"<:LOG_HALF_HEART:1054413122800189451>".repeat(half)}`,inline:true},
            {name:"Rank",value:data.rank, inline:true}
        ).setFooter({text: `Made with ❤️ by ${owner.username}#${owner.discriminator}`,
        iconURL:`https://cdn.discordapp.com/avatars/372142246331416579/${owner.avatar}`})
        
        msg.reply({embeds: [stats]});
    }catch(err){
        console.error(err);
    }
}