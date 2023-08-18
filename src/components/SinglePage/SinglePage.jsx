import React, { useEffect, useState } from "react";
import HeadTitle from "../HeadTitle/HeadTitle";
import { Link, useParams } from "react-router-dom";
import "./SinglePage.css";
import Sdata from "../../Pages/Destination/Sdata";
import EmptyFile from "../EmptyFile";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <>
      <HeadTitle />
      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/destination" className="primary-btn back">
              Go Back
              <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
          <article className="content flex">
            <div className="main-content">
              <img src={item.image} alt="" />
              <p>{item.desc}</p>
              <p>{item.desc}</p>
              <div className="para flex_space">
                <p>{item.sidepara}</p>
                <p>{item.sidepara}</p>
              </div>
              <h1>What Is The {item.title} City ?</h1>
              <p>{item.desc}</p>
              <div className="image grid1">
                <img src={item.paraImage_one} alt="" />
                <img src={item.paraImage_two} alt="" />
              </div>
              <p>{item.desc}</p>
            </div>

            <div className="side-content">
              <div className="box">
                <h2>How Can We Help You ?</h2>
                <p>{item.sidepara}</p>
                <button className="outline-btn">
                  Contact Us
                  <i className="fas fa-phone-alt"></i>
                </button>
              </div>
              <div className="box2">
                <p>{item.sidepara}</p>
              </div>
            </div>
          </article>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default SinglePage;
