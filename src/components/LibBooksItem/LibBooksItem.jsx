import css from "./LibBooksItem.module.css";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/libraryBooks/slice";

const LibBooksItem = ({ book, handleOpenModal }) => {
  const dispatch = useDispatch();
  const handleToggleFav = () => {
    dispatch(removeFavorite(book._id));
  };
  return (
    <div className={css.LibBooksItem}>
      <button
        className={css.LibBooksItemImgCont}
        onClick={() => handleOpenModal(book._id)}
      >
        <img src={book.imageUrl} alt={book.title} />
      </button>
      <div className={css.LibBooksItemContentContainer}>
        <div className={css.LibBooksItemContent}>
          <h3 className={css.LibBooksItemTitle}>{book.title}</h3>
          <p className={css.LibBooksItemText}>{book.author}</p>
        </div>
        <button className={css.LibBooksItemBtn} onClick={handleToggleFav}>
          <svg className={css.LogoSvg} width="14" height="14">
            <use href={`${sprite}#icon-trash-2`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LibBooksItem;
