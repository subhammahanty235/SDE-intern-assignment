const Media = require('../models/media.model')

const uploadMedia  = async (req,res) =>{
    try {
        console.log("Hereeeeeeeeeeeee")
        const {subject, mediaURL , story } = req.body;
        const userId = req.user.id;
        console.log(req.body)
        console.log(userId)
        const media = await Media.create({
            userId:userId,
            subject:subject,
            mediaUrl:mediaURL,
            story:story
        })

        console.log(media)

        if(!media){
            return res.status(400).json({success:false , message:"Unable to upload media"});
        }

        return res.status(200).json({success:true, message:"Media uploaded successfully"});

    } catch (error) {
        
    }
}

const getAllMedia = async(req,res) =>{
    try {
        const userId = req.user.id;
        
        const media = await Media.find({
            userId: userId
        })

        console.log(media)

        if(media.length === 0){
            return res.status(200).json({success:true, message:"You have not yet uploaded any media"});
        }

        return res.status(200).json({success:true,media:media ,  message:"Fetched all media"});

    } catch (error) {
        
    }
}

module.exports = {uploadMedia , getAllMedia};