import React from "react";
import "./Service.scss";
import Satalite from "../../images/satalite.png";
import planeService from "../../images/planeservice.png";
import Mice from "../../images/mice.png";
import Maintaine from "../../images/maintaine.png";

const Service = () => {
  return (
    <div className="server">
      <div className="content">
        <h4>CATEGORY</h4>
        <h1>We Offer Best Services</h1>
      </div>
      <div className="service-container">
        <div className="service_item">
          <img src={Satalite} alt="Satalite" />
          <h6>Calculated Weather </h6>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="service_item plane">
          <img src={planeService} alt="Satalite" />
          <h6>Calculated Weather </h6>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="service_item">
          <img src={Mice} alt="Satalite" />
          <h6>Calculated Weather </h6>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="service_item">
          <img src={Maintaine} alt="Satalite" />
          <h6>Calculated Weather </h6>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
