import React from "react";
import Tdata from "./Tdata";
import Card from "./Card";

const AllItem = () => {
  return (
    <>
      <section className="Testimonial top">
        <div className="grid1 container">
          {Tdata.map((item, idx) => {
            return <Card key={idx} item={item}/>;
          })}
        </div>
      </section>
    </>
  );
};

export default AllItem;
