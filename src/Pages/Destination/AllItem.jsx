import React, { useState } from "react";
import Sdata from "./Sdata";
import Dcards from "./Dcards";

const AllItem = () => {
  const [items] = useState(Sdata);

  return (
    <>
      <section className="gallery desi mtop">
        <div className="container_destination">
          <div className="content grid">
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllItem;
