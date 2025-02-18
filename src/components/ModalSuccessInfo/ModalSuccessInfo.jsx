import css from "./ModalSuccessInfo.module.css";
import img from "../../assets/Images/like.png";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
const ModalSuccessInfo = ({ closeModal }) => {
  return (
    <div className={css.ModalSuccessWrapper}>
      <button className={css.ModalSuccessBtnClose} onClick={closeModal}>
        <svg className={css.LogoSvg} width="22" height="22">
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <div className={css.ModalSuccessContent}>
        <img className={css.ModalSuccessImg} src={img} alt="like" />
        <div className={css.ModalSuccessInfo}>
          <h3 className={css.ModalSuccessTitle}>Good job</h3>
          <p className={css.ModalSuccessText}>
            Your book is now in <span>the library!</span> The joy knows no
            bounds and now you can start your training
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccessInfo;
