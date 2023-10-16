import BackSideImg from "./bg-card-back.png";
import "./Back.css";
function BackSide(props) {
  let { backForm } = props;
  let { cvc } = backForm;
  return (
    <div className="backSide col-9 offset-2 col-sm-6 offset-sm-3 col-md-10 offset-md-2 col-lg-9 position-relative p-0 mt-5 mt-md-3 mt-lg-4 ">
      <img src={BackSideImg} alt="/" className="" />
      <div className="cvc-Con text-end col-10 offset-1 mb-1">
        <span className="mx-1">{cvc === "" ? "000" : cvc}</span>
      </div>
    </div>
  );
}
export default BackSide;
