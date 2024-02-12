import React from 'react'
import './homepage.scss'


const HomePage = () => {
  return (
    <section className='homepage__screen'>
        <nav className='homepage__screen__nav'>
            <div className='logo'>Blink <span>Media</span></div> 

            <button>Upload New</button>

            <div className="username__logout">
                <p className="username">Subham</p>
                <button>Logout</button>
            </div>

        </nav>
        <div className="my__media__section">

        </div>
    </section>
  )
}

export default HomePage
