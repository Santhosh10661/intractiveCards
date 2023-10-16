import React, { useState } from "react";
import "./RightSide.css";
import Thankyou from "../Thankyou/Thankyou";

function RightSide(props) {
  let { formDetails, setFormDetails } = props;
  let { cardHolderName, cardNumber, expMM, expYY, cvc } = formDetails;
  let [errors, setErrors] = useState({});
  let [confrom, setConform] = useState(false);

  function ChangeInputs(e) {
    let keyname = e.target.name;
    let value = e.target.value;
    setFormDetails((prefrom) => {
      return { ...prefrom, [keyname]: value };
    });
  }
  function submitForm(e) {
    e.preventDefault();

    const formValidation = () => {
      const inputError = {};
      if (!cardHolderName.trim()) {
        inputError.cardHolderName = "Can't be blank";
      }
      if (!cardNumber.trim()) {
        inputError.cardNumber = "Can't be blank";
      } else if (!isValiNumber(cardNumber)) {
        inputError.cardNumber = "Worng format,numbers only";
      }

      if (!expMM.trim() || !expYY.trim()) {
        inputError.exp = "Can't be blank";
      } else if (!isValiNumber(expMM) || !isValiNumber(expYY)) {
        inputError.exp = "Worng format,numbers only";
      }
      if (!cvc.trim()) {
        inputError.cvc = "Can't be blank";
      } else if (cvc.length !== 3) {
        inputError.cvc = "3 digit required";
      } else if (!isValiNumber(cvc)) {
        inputError.cvc = "Worng format,numbers only";
      }
      setErrors(inputError);

      return Object.keys(inputError).length === 0;
    };
    function isValiNumber(inputs) {
      let modifiedCardNumber = inputs.replace(/\s/g, "");
      return /^[0-9]+$/.test(modifiedCardNumber);
    }
    if (formValidation()) {
      return setConform(true);
    }
  }
  return (
    <div className="rightside col-md-8 mt-5">
      <form className="d-block col-md-7 col-lg-6 ">
        <label className="col-12">
          <span>cardholder name</span>
          <br />
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            name="cardHolderName"
            onChange={ChangeInputs}
            value={cardHolderName}
            maxLength={20}
            className={`my-2 ${errors.cardHolderName ? "error-input" : ""}`}
          />
          {errors.cardHolderName && (
            <p className="error">{errors.cardHolderName}</p>
          )}
        </label>
        <label className="col-12">
          <span> card number</span>
          <br />
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            name="cardNumber"
            onChange={ChangeInputs}
            value={cardNumber
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            maxLength={19}
            className={`my-2 ${errors.cardNumber ? "error-input" : ""}`}
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </label>
        <div className="col d-flex">
          <label className="mmyy col-5">
            <span className="col-12">exp.date(mm/yy)</span>
            <br />
            <input
              type="text"
              placeholder="MM"
              name="expMM"
              onChange={ChangeInputs}
              value={expMM}
              maxLength={2}
              className={`col-5 my-2 ${errors.exp ? "error-input" : ""}`}
            />
            <input
              type="text"
              placeholder="YY"
              name="expYY"
              onChange={ChangeInputs}
              value={expYY}
              maxLength={2}
              className={`col-5 my-2 offset-1 ${
                errors.exp ? "error-input" : ""
              }`}
            />
            {errors.exp && <p className="error">{errors.exp}</p>}
          </label>
          <label className="cvc col-7">
            <span>cvc</span> <br />
            <input
              type="text"
              placeholder="e.g. 123"
              name="cvc"
              onChange={ChangeInputs}
              value={cvc}
              maxLength={3}
              className={`my-2 ${errors.cvc ? "error-input" : ""}`}
            />
            {errors.cvc && <p className="error">{errors.cvc}</p>}
          </label>
        </div>
        <input
          type="submit"
          value="confirm"
          className="submitBtn"
          onClick={submitForm}
        />
      </form>
      {confrom && <Thankyou setConform={setConform} />}
    </div>
  );
}

export default RightSide;
