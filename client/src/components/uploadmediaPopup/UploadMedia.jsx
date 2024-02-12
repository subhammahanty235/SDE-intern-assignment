import React, { useState } from 'react'
import { ClickAwayListener, Dialog } from '@mui/material'
import './uploadmedia.scss'
import { useRef } from 'react'
import axios from 'axios';


const UploadMedia = ({ openPopup, setOpenPopup, getAllMediaFunction }) => {
    const imageInputRef = useRef(null)
    const [userInputs, setUserInputs] = useState({ title: "", story: "" });
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)


    const onUploadImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const onChange = (e) => {
        setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
    }

    const closeDialog = () => {
        setOpenPopup(false);
        setImage(null)
        setUserInputs({ title: "", story: "" })
    }


    const uploadAndSaveImage = async () => {
        //upload the image to cloudinary
        let imagelink = ""
        if(image === null){
            return alert("Please upload an image")
        }
        if (image !== null || title !== "") {
            setLoading(true)

            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "utk7tsdj");
            data.append("cloud_name", "dbnqqpobe");
            fetch("https://api.cloudinary.com/v1_1/dbnqqpobe/image/upload", {
                method: "POST",
                body: data,
            }).then((res) => res.json())
                .then(async (data) => {
                    const response = await axios.post(`http://localhost:5000/api/media/uploadmedia`,
                        {
                            subject: userInputs.title,
                            mediaURL: data.url,
                            story: userInputs.story
                        },
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "auth-token": localStorage.getItem('auth-token')
                            },
                        })

                    console.log(response.data)

                    if (response.data.success === true) {
                        setLoading(false)
                        closeDialog()
                        getAllMediaFunction();   //to update the homepage with the new uploaded image
                    }
                }).catch((err) => {
                    console.log(err)
                })






        } else {
            alert("Please upload a image")
            return;
        }
    }

    return (

        <Dialog open={openPopup} maxWidth={"80vw"}   >
            <ClickAwayListener onClickAway={() => { closeDialog() }}>
                <div className="upload__media__popup">
                    <div className="inner__upload__media">
                        <div className="left__section">

                            <input type="file" style={{ display: "none" }} onChange={onUploadImage} ref={imageInputRef} />

                            {
                                image === null ?
                                    <div className="image__upload__button" onClick={() => imageInputRef.current.click()}>
                                        Upload Image
                                    </div> :
                                    <img src={URL.createObjectURL(image)} alt="" />
                            }



                        </div>
                        <div className="upload_right__section">
                            <div>
                                <label htmlFor="title*">Title</label>
                                <input type="text" value={userInputs.title} name='title' onChange={onChange} />
                            </div>
                            <div>
                                <label htmlFor="story">Story</label>
                                <textarea name="story" id="" onChange={onChange} value={userInputs.story}  ></textarea>
                            </div>
                            <button onClick={uploadAndSaveImage}>{loading === true ? "Uploading..." :"Upload"}</button>
                            <p className='disclaim'>*Click outside this dialog to close</p>
                        </div>
                    </div>
                </div>
            </ClickAwayListener>
        </Dialog>


    )
}

export default UploadMedia
