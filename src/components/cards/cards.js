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
    <div className="Cards col-12 col-md-5 col-lg-5 offset-md-1">
      <div className="cardCon col-12 col-md-11 position-relative">
        <FrontSide frontForm={frontForm} />
        <BackSide backForm={backForm} />
      </div>
    </div>
  );
}

export default Cards;
