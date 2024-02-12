import React, { useEffect, useState } from 'react'
import './homepage.scss'
import UploadMedia from '../../components/uploadmediaPopup/UploadMedia'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const [openUploadopup, setOpenUpload] = useState(false)
    const [media, setmedia] = useState([])
    const fetchAllMedia = async () => {

        const response = await axios.get(`http://localhost:5000/api/media/getall`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('auth-token')
                },
            }
        )

        if (response.data.success === true) {
            console.log(response.data)
            setmedia(response.data.media)
        }
    }

    useEffect(() => {
        fetchAllMedia();
    }, [openUploadopup])

    const logout = () =>{
        localStorage.removeItem('auth-token')
        navigate('/signup')
    }

    

    return (
        <section className='homepage__screen'>
            <nav className='homepage__screen__nav'>
                <div className='logo'>Blink <span>Media</span></div>

                <button onClick={() => { setOpenUpload(true) }}>Upload New</button>

                <div className="username__logout">
                    <p className="username">Subham</p>
                    <button onClick={logout}>Logout</button>
                </div>

            </nav>
            <div className="my__media__section">
                {
                    media?.map((image) => {
                        return <div className='images'>
                            <img src={image.mediaUrl} alt="" />
                        </div>
                    })
                }
            </div>

            <UploadMedia openPopup={openUploadopup} setOpenPopup={setOpenUpload} fetchAllMedia={fetchAllMedia} />
        </section>

    )
}

export default HomePage


