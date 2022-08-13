import React from "react";
import "./Footer.scss";
import Logo from "../../images/logo.png";

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="logo">
        <img src={Logo} alt="" />
        <p>Book your trip in minute, get full Control for much longer.</p>
      </div>
      <div className="content">
        <h5>Company</h5>
        <p>About</p>
        <p>Careers</p>
        <p>Mobile</p>
      </div>
      <div className="content">
        <h5>Contact</h5>
        <p>Help/FAQ</p>
        <p>Press</p>
        <p>Affilates</p>
      </div>
      <div className="content">
        <h5>More</h5>
        <p>Airlinefees</p>
        <p>Airline</p>
        <p>Low fare tips</p>
      </div>
      <div className="content">
        <div className="social">
          <div>
            <AiFillFacebook />
          </div>
          <div>
            <AiOutlineInstagram />
          </div>
          <div>
            <AiFillTwitterSquare />
          </div>
        </div>
        <p>Low fare tips</p>
      </div>
    </div>
  );
};

export default Footer;
