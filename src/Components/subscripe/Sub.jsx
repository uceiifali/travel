import React from "react";
import "./Sub.scss";
import Pic1 from "../../images/pic1";
import Pic2 from "../../images/pic2";
import Pic3 from "../../images/pic3";
import Pic4 from "../../images/pic4";
import Pic5 from "../../images/pic5";
const Sub = () => {
  return (
    <div className="Sub">
      <div className="logos">
        <img src={Pic1} alt="logo" />
        <img src={Pic2} alt="logo" />
        <img src={Pic3} alt="logo" />
        <img src={Pic4} alt="logo" />
        <img src={Pic5} alt="logo" />
      </div>
      <div className="sub-container">
        <p>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </p>
        <div className="content">
          <input type="text" placeholder="Your Email..." />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Sub;
