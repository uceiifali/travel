import React, { useState } from "react";

import "./Navbar.scss";
import Logo from "../../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        {["desitnations", "hotels", "flights", "bookings"].map(
          (item, index) => (
            <a href={`#${item}`} key={index}>
              {item}
            </a>
          )
        )}
        <button className="log">Login</button>
        <button className="sign">Sign Up</button>
      </nav>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Navbar;
