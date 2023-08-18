import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="box">
        <i className="fa fa-quote-left"></i>
        <div className="para">
          <p>{item.desc}</p>
        </div>
        <hr />
        <div className="details flex">
          <div className="img">
            <img src={item.profile} alt="" />
          </div>
          <div className="name">
            <h3>{item.name}</h3>
            <span>{item.post}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
