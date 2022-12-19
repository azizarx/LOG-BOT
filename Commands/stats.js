const { EmbedBuilder } = require('discord.js');
const  memberC = require('../Controllers/Member.js');
module.exports = async (msg,args)=>{
    let id = args[0] || `<@${msg.author.id}>`;
    let data = await memberC.getMemberByID(id)
    data = data[0];
    console.log(data)
    const stats = new EmbedBuilder()
    .setTitle("✨**Stats**✨")
    .setColor(msg.member.displayHexColor)
    .setThumbnail('https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/320383891_652527159996212_162914592375142156_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6Nu_1r2CVZYAX-APYvg&_nc_ht=scontent.ftun1-2.fna&oh=03_AdTrJTWT3yu2f18BoC6IRMXy4Nsdd9IEG5zmBDZa2wbZ5A&oe=63C7C2B2')
    .addFields(
        {name:'Name',value:data.name},
        {name:"Points",value:data.points.toString(), inline:true},
        {name:"Hearts",value:data.hearts.toString()+" ❤️",inline:true},
        {name:"Rank",value:data.rank, inline:true}
    ).setFooter({text: `Made with ❤️ by Azizar Himself#4849`,
    iconURL:`https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/72102644_692610867891624_8459852470829449216_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f80vxS1CdGIAX_pc8jX&_nc_ht=scontent.ftun1-2.fna&oh=00_AfD5pbK8IrgrWQ5NAxzT6U9uj0Kti7wGdKrfzal986WqMw&oe=63C7C770`})
    
    msg.reply({embeds: [stats]});
}