import React from "react";
import "./TopSelling.scss";
import TopSellingImg1 from "../../images/topSelling1";
import TopSellingImg2 from "../../images/topSelling2";
import TopSellingImg3 from "../../images/topSelling3";
import { RiSendPlaneLine } from "react-icons/ri";
const TopSelling = () => {
  return (
    <div className="selling">
      <div className="content">
        <h4>Top Selling</h4>
        <h1>Top Destinations</h1>
      </div>
      <div className="topSelling-container">
        <div className="topSelling-item">
          <img src={TopSellingImg1} alt="" />
          <div className="price">
            <p>Rome, Italy</p>
            <span>$5,42k</span>
          </div>
          <div className="icon">
            <RiSendPlaneLine />
            <span>10 Days Trip</span>
          </div>
        </div>
        <div className="topSelling-item">
          <img src={TopSellingImg2} alt="" />
          <div className="price">
            <p>London, UK</p>
            <p>$4.2k</p>
          </div>
          <div className="icon">
            <RiSendPlaneLine />
            <span>12 Days Trip</span>
          </div>
        </div>
        <div className="topSelling-item">
          <img src={TopSellingImg3} alt="" />
          <div className="price">
            <p>Full Europe</p>
            <p>$15k</p>
          </div>
          <div className="icon">
            <RiSendPlaneLine />
            <span>28 Days Trip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
