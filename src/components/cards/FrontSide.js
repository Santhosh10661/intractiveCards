import React from "react";
import FrontSideImg from "./bg-card-front.png";
// import "./FrontAndBack.css";
import "./front.css";

function FrontSide(props) {
  let { frontForm } = props;
  let { cardHolderName, cardNumber, expMM, expYY } = frontForm;
  return (
    <div className="frontSide col-9 col-sm-6 offset-sm-1 col-md-10 offset-md-0 col-lg-9">
      <img src={FrontSideImg} alt="/" className="col-12" />
      <div className="fd-Con col-12 position-absolute p-3 p-sm-3 ">
        <div className="cardLogo">
          <svg
            viewBox="0 0 84 47"
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="col-4"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        </div>
        <div>
          <div className="col-12 cNo ">
            <p className="m-0">
              {cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}
            </p>
          </div>
          <div className="chDetails col-12 mt-2">
            <p className="lspace text-uppercase m-0">
              {cardHolderName === "" ? "Jane Appleseed" : cardHolderName}
            </p>
            <div className="expdate">
              <p className="lspace m-0">{expMM === "" ? "00" : expMM}</p>
              <p className=" m-0">/</p>
              <p className="lspace m-0">{expYY === "" ? "00" : expYY}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FrontSide;
