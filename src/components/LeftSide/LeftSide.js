import React from "react";
import bgDesk from "./bg-main-desktop.png";
import bgMob from "./bg-main-mobile.png";
import "./LeftSide.css";

function LeftSide() {
  return (
    <div className="leftside col-md-4">
      <picture>
        <img src={bgMob} alt="/" className="d-block d-md-none col-12  bg-mob" />
        <img
          src={bgDesk}
          alt="/"
          className="d-none d-md-block col-12 bg-desk"
        />
      </picture>
    </div>
  );
}
export default LeftSide;
