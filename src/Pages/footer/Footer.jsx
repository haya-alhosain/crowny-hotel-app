import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid">
          <div className="box">
            <h2>ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet sectetur adipiscing elit amet
              consectetur scing elit amet consectetur adipiscing elit sed et
              eletum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet sectetur adipiscing elit amet
              consectetur scing elit amet.
            </p>
            <div className="icon flex_space">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>

          <div className="box">
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="box post">
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className="fa fa-calendar-alt"></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className="fa fa-calendar-alt"></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className="fa fa-calendar-alt"></label>
                <span>01 Oct 2020</span>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>NEWSLETTER</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

            <input type="text" name="" id="" />
            <input type="text" className="primary-btn" value="SUBSCRIBE" />
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>© 2023 All Rights Reserved Made By HayaAlhosain.</p>
      </div>
    </>
  );
};

export default Footer;
