import React, { useState } from "react";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import Cards from "./components/cards/cards";

function App() {
  let [formDetails, setFormDetails] = useState({
    cardHolderName: "",
    cardNumber: "",
    expMM: "",
    expYY: "",
    cvc: "",
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <LeftSide />
        <RightSide formDetails={formDetails} setFormDetails={setFormDetails} />
        <Cards formDetails={formDetails} />
      </div>
    </div>
  );
}

export default App;
