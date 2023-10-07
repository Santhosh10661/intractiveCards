import React from "react";
import FrontSideImg from "./bg-card-front.png";
import "./FrontAndBack.css";

function FrontSide(props) {
  // let defaultForm = {
  //   cardHolderName: "Jane Appleseed",
  //   cardNumber: "0000 0000 0000 0000",
  //   expMM: "00",
  //   expYY: "00",
  // };
  let { frontForm } = props;
  let { cardHolderName, cardNumber, expMM, expYY } = frontForm;
  return (
    <div className="frontSide  p-0">
      <img src={FrontSideImg} alt="/" />
      <div className="frontSideCon">
        <div className="circleCon">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <div className="details">
          <div className="cardNo">
            <span className="m-0">
              {cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}
            </span>
          </div>
          <div className="nameField d-flex justify-content-between">
            <span>
              {cardHolderName === "" ? "Jane Appleseed" : cardHolderName}
            </span>
            <div className="date d-flex">
              <span className="text-end">{expMM === "" ? "00" : expMM}</span>
              <p className="m-0">/</p>
              <span>{expYY === "" ? "00" : expYY}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FrontSide;
