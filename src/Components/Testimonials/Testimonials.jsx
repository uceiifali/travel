import React from "react";
import "./Testimonials.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Person from "../../images/person";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <div className="left">
        <h5>Testimonials</h5>
        <h1>What people say about Us.</h1>
      </div>
      <div className="right">
        <Splide className="slider" aria-label="My Favorite Images">
          <SplideSlide className="slide-item">
            <img src={Person} alt="Image 1" />
            <div className="content">
              <p>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <h6>Mike taylor</h6>
              <span>Lahore, Pakistan</span>
            </div>
          </SplideSlide>
          <SplideSlide className="slide-item">
            <img src={Person} alt="Image 2" />
            <div className="content">
              <p>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <h6>Youssef Ali</h6>
              <span>Cairo, Egypt</span>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
