const { findOneAndUpdate, mapReduce } = require('../Models/member.js');
const member = require('../Models/member.js');
const ranks = new Object();

const  getAllMembers = async ()=>{
     const Members = await member.find({});
     return Members;
};
const getMemberByID = async (Id)=>{
    const theMember = await member.find({id:Id})
    if(!theMember){
        console.log("Member not found")
        return
    }else{
        return theMember
    }
    
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
const updateRank = async (MemberId)=>{
    const Member = await member.find({id:MemberId});
    let pts = Member[0].points;
    let rankStr = ''
    if(pts>=250){
        rankStr = "LOGGER";
    }else if(pts >= 180){
        rankStr = "Emerald";
    }else if(pts >= 130){
        rankStr = "Diamond";
    }else if(pts >= 90){
        rankStr = "Gold";
    }else if(pts >= 50){
        rankStr = "Silver";
    }else if(pts >= 20){
        rankStr = "Bronze";
    }else{
        rankStr = "Unranked";
    }
    const updatedMember = await member.findOneAndUpdate({id:MemberId},{rank:rankStr});
    return updatedMember
}
const deleteMember = async (memberId)=>{
    try{
     const res = await member.findOneAndRemove({id:memberId});
    if(!res){
        console.log('could not find user')
    }
    return res;
    }catch(err){
        console.error(err);
    }
}
module.exports = {
    getAllMembers,
    createMember,
    editPoints,
    editHearts,
    getMemberByID,
    updateRank,
    deleteMember
}