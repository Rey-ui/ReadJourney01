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
    <div>
      <button onClick={handlePrevious} disabled={page === 1}>
        <svg className={css.svg} width="42" height="17">
          <use href={`${sprite}#icon-Vector-left`}></use>
        </svg>
      </button>
      <button onClick={handleNext} disabled={page === totalPages}>
        <svg className={css.svg} width="42" height="17">
          <use href={`${sprite}#icon-Vector-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default RecPaginationBtns;
