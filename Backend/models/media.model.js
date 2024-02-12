const mongoose = require("mongoose")
const {Schema} = mongoose ;
const MediaSchema = new Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    subject : {
        type: String ,
        required : true
    },
    mediaUrl:{
        type: String,
        required:true,
    },
    story:{
        type : String ,
    },
    date : {
        type : Date,
        default : Date.now
    }

})
module.exports = mongoose.model('media' , MediaSchema)