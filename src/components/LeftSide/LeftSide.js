import React from "react";
import bgDesk from "./bg-main-desktop.png";
import bgMob from "./bg-main-mobile.png";
import "./LeftSide.css";

function LeftSide() {
  return (
    <div className="leftside col-md-4">
      <picture>
        <source media="(max-width:768px)" srcSet={bgMob} />
        <img src={bgDesk} alt="/" />
      </picture>
    </div>
  );
}
export default LeftSide;
