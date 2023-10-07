import BackSide from "./Backside";
import FrontSide from "./FrontSide";
import "./Cards.css";

function Cards(props) {
  let { formDetails } = props;
  let { cardHolderName, cardNumber, expMM, expYY, cvc } = formDetails;
  let frontForm = {
    cardHolderName,
    cardNumber,
    expMM,
    expYY,
    cvc,
  };
  let backForm = { cvc };
  return (
    <div className="Cards col-md-5">
      <FrontSide frontForm={frontForm} />
      <BackSide backForm={backForm} />
    </div>
  );
}

export default Cards;
