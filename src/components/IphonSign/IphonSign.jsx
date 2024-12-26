import img from "../../assets/Images/iPhoneBlack.png";
import css from "./IphonSign.module.css";

const IphonSign = () => {
  return (
    <div className={css.IphonSignImage}>
      <img className={css.IphonSignImg} src={img} alt="iPhoneBlack" />
    </div>
  );
};

export default IphonSign;
