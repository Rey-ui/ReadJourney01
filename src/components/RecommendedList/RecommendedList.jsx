import { useSelector } from "react-redux";
import {
  getBooksRec,
  selectFilteredContacts,
} from "../../redux/books/selectors";
import RecPaginationBtns from "../RecPaginationBtns/RecPaginationBtns";
import RecBooksItem from "../RecBooksItem/RecBooksItem";

const RecommendedList = ({ page, setPage }) => {
  const books = useSelector(selectFilteredContacts);
  return (
    <div>
      <div>
        <h2>Recommended</h2>
        <RecPaginationBtns page={page} setPage={setPage} />
      </div>

      <ul>
        {books.map((book) => {
          return (
            <li key={book._id}>
              <RecBooksItem book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecommendedList;
