import img from "../../assets/Images/bigbooks.png";
import css from "./LibraryClear.module.css";
const LibraryClear = () => {
  return (
    <div className={css.LibraryClear}>
      <div className={css.LibraryClearImgCont}>
        <img className={css.LibraryClearImg} src={img} alt="books" />
      </div>
      <p className={css.LibraryClearText}>
        To start training, add <span>some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};

export default LibraryClear;
