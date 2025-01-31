import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/books/selectors";
import RecPaginationBtns from "../RecPaginationBtns/RecPaginationBtns";
import RecBooksItem from "../RecBooksItem/RecBooksItem";
import css from "./RecommendedList.module.css";
const RecommendedList = ({ page, setPage }) => {
  const books = useSelector(selectFilteredContacts);
  return (
    <div className={css.RecListWrapper}>
      <div className={css.RecListHeader}>
        <h2 className={css.RecListTitle}>Recommended</h2>
        <RecPaginationBtns page={page} setPage={setPage} />
      </div>

      <ul className={css.RecList}>
        {books.map((book) => {
          return (
            <li className={css.RecItem} key={book._id}>
              <RecBooksItem book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecommendedList;
