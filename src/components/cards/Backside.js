import BackSideImg from "./bg-card-back.png";
import "./FrontAndBack.css";
function BackSide(props) {
  let { backForm } = props;
  let { cvc } = backForm;
  return (
    <div className="backSide offset-2 p-0 ">
      <img src={BackSideImg} alt="/" />
      <div className="cvc-Con mb-1">
        <span>{cvc === "" ? "000" : cvc}</span>
      </div>
    </div>
  );
}
export default BackSide;
