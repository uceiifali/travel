import React from "react";
import "./Book.scss";
import Logo1 from "../../images/logo1.png";
import Logo2 from "../../images/logo2.png";
import Logo3 from "../../images/logo3.png";
import BookImg from "../../images/bookImg";
import { IoMapSharp } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
const Book = () => {
  return (
    <div className="Book">
      <p>Easy and Fast</p>
      <div className="container">
        <div className="left">
          <h1>Book your next trip in 3 easy steps</h1>
          <div className="values">
            <div className="value">
              <img src={Logo1} alt="logo" />
              <div className="content">
                <h5>Choose Destination</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="value">
              <img src={Logo2} alt="logo" />
              <div className="content">
                <h5>Make Payment</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="value">
              <img src={Logo3} alt="logo" />
              <div className="content">
                <h5>Reach Airport on Selected Date</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="blue"></div>
          <div className="content-container">
            <img src={BookImg} alt="Book" />
            <h6>Trip To Greece</h6>
            <p>14-29 June | by Robbin joseph</p>
            <div className="icons-container">
              <div className="icon">
                <FaLeaf />
              </div>
              <div className="icon">
                <IoMapSharp />
              </div>
              <div className="icon">
                <RiSendPlaneFill />
              </div>
            </div>
            <div className="build">
              <div className="con">
                <BsBuilding />
                <p>24 people going</p>
              </div>
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
