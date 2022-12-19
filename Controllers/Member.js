const { findOneAndUpdate } = require('../Models/member.js');
const member = require('../Models/member.js');


const  getAllMembers = async ()=>{
     const Members = await member.find({});
     return Members;
};
const getMemberByID = async (Id)=>{
    const theMember = await member.find({id:Id})
    console.log(theMember)
    return theMember
}
const createMember = async (memberObj)=>{
   try{

    const Member = await member.create(memberObj);
    return Member;}
    catch(msg){
        console.error("smth went wrong");
    }
}
const editPoints = async (MemberId,points)=>{
    const Member = await member.find({id : MemberId});
    if(Member.length == 0){
        console.log('empty');
        return false;
    }
    let pts = Member[0].points;
    pts += points;
    const updatedMember = await member.findOneAndUpdate({id:MemberId},{points:pts}, {
        new: true,
        runValidators: true,
      });
    return true;
    
}
const editHearts = async (MemberId,heart)=>{
    try{
    const Member = await member.find({id : MemberId});
    if(Member.length == 0){
        console.log('empty');
        return false;
    }
    let hts = Member[0].hearts;
    hts += heart;
    const updatedMember = await member.findOneAndUpdate({id:MemberId},{hearts:hts}, {
        new: true,
        runValidators: true,
    });
    return true;
}catch(err){
    console.error(err);
}
}
module.exports = {
    getAllMembers,
    createMember,
    editPoints,
    editHearts,
    getMemberByID
}