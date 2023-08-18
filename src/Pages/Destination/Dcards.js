import React from "react";
import { Link } from "react-router-dom";
const DCards = ({item , id}) => {
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={item.image} alt="" />
          
          <Link to={`/singlePage/${item.id}`} className="blogItem-link">
            <i className="fas fa-external-link-alt"></i>
          </Link>
        </div>

        <div className="title">
          <h3>{item.title}</h3>
        </div>
      </div>
    </>
  );
};

export default DCards;
