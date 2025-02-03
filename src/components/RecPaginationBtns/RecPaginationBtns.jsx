import { useSelector } from "react-redux";
import { getTotal } from "../../redux/books/selectors";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
import css from "./RecPaginationBtns.module.css";
const RecPaginationBtns = ({ page, setPage }) => {
  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };
  const totalPages = useSelector(getTotal);
  return (
    <div className={css.BtnsWrapper}>
      <button className={css.Btn} onClick={handlePrevious}>
        <svg
          disabled={page === 1}
          className={page === 1 ? css.svgdisabled : css.svg}
          width="8"
          height="12"
        >
          <use href={`${sprite}#icon-Vector-left`}></use>
        </svg>
      </button>
      <button className={css.Btn} onClick={handleNext}>
        <svg
          disabled={page === totalPages}
          className={page === totalPages ? css.svgdisabled : css.svg}
          width="8"
          height="12"
        >
          <use href={`${sprite}#icon-Vector-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default RecPaginationBtns;
