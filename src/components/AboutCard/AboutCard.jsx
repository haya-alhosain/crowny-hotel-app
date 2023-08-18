import React from "react";
const AboutCard = () => {
  return (
    <>
      <section className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About Us</h4>
          <h1>
            we <span>Provide Solution</span> to grow your business
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi
            perferendis laborum distinctio rerum, voluptate esse consequuntur,
            vitae officiis atque itaque quasi modi reiciendis .
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi
            perferendis laborum distinctio rerum, voluptate esse consequuntur,
            vitae officiis atque itaque quasi modi reiciendis .
          </p>
          <button className="secondary-btn">
            Explore More <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="row image">
          <img src="/images/about-img-1.jpg" alt="" />
          <div className="control-btn">
            <button className="prev">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
