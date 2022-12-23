const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    id:  {
        type: String,
        required: [true, 'Missing ID'],
        unique: [true,'id must be unique']
    },
    name: {
        type: String,
        required:[true,'Missing Name'],
    },
    points:{
        type:Number,
        default:0,
        min: [0, 'points cannot be negative']
    },
    hearts : {
        type:Number,
        default:3,
        min: [0, 'hearts cannot be negative'],
        max: [3,'cannot pass 3 hearts']
    }, 
    rank:{
        type:String,
        default: "Unranked"
    }
});

module.exports = mongoose.model('User',userSchema );