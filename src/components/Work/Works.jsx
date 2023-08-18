import React from "react";
import Card from "./Card";
import Wdata from "./Wdata";
import './Works.css'
const Works = () => {
  return (
    <>
      <section className="popular works">
        <div className="container">
          <div className="heading">
            <h1>How it Works</h1>
            <div className="line"></div>
          </div>
          <div className="content grid">
            {Wdata.map((item, idx) => {
             return <Card key={idx} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
