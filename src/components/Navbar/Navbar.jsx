import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [click , setClick] = useState(false)

  const handleClick =() =>{
    setClick(!click)
  }
 const closeMobileMenue=()=>{
  setClick(false)
 }
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick }>
            <i className={click? "fas fa-times":"fas fa-bars"}></i>
          </div>
          <ul className={click? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenue}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenue}>About</Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenue}>Gallery</Link>
            </li>
            <li>
              <Link to="/destination"  onClick={closeMobileMenue}>Destination</Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenue}>Blog</Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={closeMobileMenue}>Testimonial</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenue}>Contact Us</Link>
            </li>
          </ul>
          <div className="login-area  flex">
            <li>
              <Link to="/sign-in">
                <i className="fas fa-chevron-right"></i>
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="fas fa-chevron-right"></i>
                Register
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>
      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src='images/logo.png' alt="logo"/>
          </div>
          <div className="contact flex_space">
          <div className="box flex_space">
            <div className="icons">
              <i className="fas fa-clock"></i>
            </div>
            <div className="text">
              <h4>Working Hours</h4>
              <Link to="/contact">Monday - Sunday : 9.00am to 6.00pm</Link>
            </div>
          </div>
          <div className="box flex_space">
            <div className="icons">
              <i className="fas fa-phone-volume"></i>
            </div>
            <div className="text">
              <h4>Call Us Hours</h4>
              <Link to="/contact">+011 123 4567</Link>
            </div>
          </div>
          <div className="box flex_space">
            <div className="icons">
              <i className="far fa-envelope"></i>
            </div>
            <div className="text">
              <h4>Mail Us</h4>
              <Link to="/contact">info@example.com</Link>
            </div>
          </div>
        </div>
        </div>

      </header>
    </>
  );
};

export default Navbar;
