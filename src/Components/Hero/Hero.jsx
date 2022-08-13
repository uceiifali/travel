import React from "react";
import "./Hero.scss";
import { BiPlay } from "react-icons/bi";
import HeroImage from "../../images/heroGirl";
import Plane from "../../images/plane.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h5>Best Destinations around the world</h5>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="hero__btns">
          <button>Find out more</button>
          <div className="cir">
            <BiPlay />
          </div>
          <span>Play Demo</span>
        </div>
      </div>
      <div className="hero__imgs">
        <img src={Plane} className="f-plane" alt="" />
        <img src={HeroImage} className="girl" alt="" />
        <img src={Plane} className="l-plane" alt="" />
      </div>
    </div>
  );
};

export default Hero;
