const User  = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const signUp = async(req,res) => {
    try {
        console.log("here")
        const {emailId , name , password} = req.body;
        console.log(req.body)
        if(!emailId || !name || !password){
           return res.status(400).json({success: false , message: "Please fill all the required fields"})
        }

        const checkExistingUser = await User.findOne({emailId: emailId});
        if(checkExistingUser){
            return res.status(400).json({success: false , message: "User with this emailId already exists, please Login"});
        }

        const salt = await bcrypt.genSalt(10);
        let encyptedPassword = await bcrypt.hash(emailId , salt);

        let user = await User.create({
            name:name,
            emailId:emailId,
            password:encyptedPassword,
        })

        const data = {
            user:{
                id:user.id
            }
        };

        const authToken = jwt.sign(data , process.env.JWT_SECRET)
        
        res.status(200).json({success:true ,token:authToken, message:"Account Created successfully"});

    } catch (error) {
        
    }
}

const login = async(req,res) => {
    try {
        const {emailId , password} = req.body;
        let user = await User.findOne({emailId:emailId});
        if(!user){
            return res.status(400).json({success:false , message:"Could not find User with this email Id "});
        }

        const comparePassword = await bcrypt.compare(password , user.password);
        if(!comparePassword){
            return res.status(400).json({success:false , message:"Please enter correct credentials"});
        }

        const data = {
            user:{
                id:user.id
            }
        };

        const authToken = jwt.sign(data , process.env.JWT_SECRET);
        res.status(200).json({success:true ,token:authToken, message:"Logged in successfully"});

    } catch (error) {
        
    }
}

module.exports = {login , signUp}