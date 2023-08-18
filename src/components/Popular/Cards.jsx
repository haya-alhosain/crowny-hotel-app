import React from "react";
import PopularData from "./PopData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="control-btn" onClick={onClick}>
//         <button className="next">
//           <i className="fa fa-long-arrow-alt-right"></i>
//         </button>
//       </div>
//     );
//   };
//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="control-btn" onClick={onClick}>
//         <button className="prev">
//           <i className="fa fa-long-arrow-alt-left"></i>
//         </button>
//       </div>
//     );
//   };
const Cards = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        //   nextArrow: <NextArrow/>,
        //   prevArrow: <PrevArrow/>,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {PopularData.map((value) => {
          return (
            <div className="cards">
              <div className="item">
                <div className="image">
                  <img src={value.image} alt="" />
                  <i className="fas fa-map-marker-alt">
                    <label>{value.country}</label>
                  </i>
                </div>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="details">
                  <h2>{value.name}</h2>
                  <div className="boarder">
                    <h3>{value.price}</h3>
                    <span>Per Night</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Cards;
