import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/books/selectors";
//import RecPaginationBtns from "../RecPaginationBtns/RecPaginationBtns";
//import RecBooksItem from "../RecBooksItem/RecBooksItem";
//import css from "./RecommendedList.module.css";
//import ModalBook from "../Modal/ModalBook";

const LibraryRecommended = () => {
  const books = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul>
        {books.slice(0, 3).map((book) => {
          return (
            <li key={book._id}>
              <img
                src={book.imageUrl}
                alt={book.title}
                width={137}
                height={208}
              />
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LibraryRecommended;
