import React from "react";
import "./HomeGallery.css";
import Gdata from "./Gdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HomeGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <>
      <section className="collection">
        <div className="container top">
          <Slider {...settings}>
            {Gdata.map((item, idx) => {
              return (
                <div className="box">
                  <img src={item.cover} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HomeGallery;
