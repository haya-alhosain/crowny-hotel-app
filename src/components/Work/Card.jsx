import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <div className="box">
        <div className="img">
            <img src={item.cover} alt="" />
        </div>
        <div className="details">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
        </div>
    </div>
    </>
  )
}

export default Card