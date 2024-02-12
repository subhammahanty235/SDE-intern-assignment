const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    password:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        min: 8,
        max: 20,
    },
    


},
    { timestamps: true }
)


const User = mongoose.model('users',UserSchema);
module.exports = User;