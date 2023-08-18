import React, { useState } from 'react'
import './Gallery.css'
const Card = ({image , title}) => {
    const [popup , setpopup] = useState(false)
    const toggleModal = () =>{
        setpopup(!popup)
    }
  return (
    <>
    <div className='items'>
        <div className="img">
            <img src={image} alt="" />
            <i className='fas fa-image' onClick={toggleModal}></i>
        </div>
        <div className="title">
            <h3>{title}</h3>
        </div>
    </div>
    {popup && (
        <div className='popup'>
            <div className="hide"></div>
            <div className="popup-content">
                <button onClick={toggleModal}>close</button>
                <img src={image} alt="" />
            </div>
        </div>

    )}
    </>
  )
}

export default Card