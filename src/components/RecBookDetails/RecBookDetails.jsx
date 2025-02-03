import css from "./RecBookDetails.module.css";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";

const RecBookDetails = ({ modalData, closeModal }) => {
  return (
    <div className={css.DetailsWrapper}>
      <button className={css.DetailsBtnClose} onClick={closeModal}>
        <svg className={css.LogoSvg} width="22" height="22">
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <div className={css.DetailsContent}>
        <img
          className={css.DetailsImg}
          src={modalData.imageUrl}
          alt={modalData.title}
        />
        <div className={css.DetailsText}>
          <p className={css.DetailsTitle}>{modalData.title}</p>
          <p className={css.DetailsAuthor}>{modalData.author}</p>
          <span className={css.DetailsTotal}>{modalData.totalPages}</span>
        </div>
        <button className={css.DetailsButton}>Add to library</button>
      </div>
    </div>
  );
};

export default RecBookDetails;
