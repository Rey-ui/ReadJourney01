import { useSelector } from "react-redux";
import { getFavorites } from "../../redux/libraryBooks/selectors";
import LibBooksItem from "../LibBooksItem/LibBooksItem";
import css from "./LibraryList.module.css";

const LibraryList = () => {
  const books = useSelector(getFavorites);
  return (
    <div className={css.LibraryListWrapper}>
      <ul className={css.LibraryList}>
        {books &&
          books.map((book) => {
            return (
              <li className={css.LibraryListItem} key={book._id}>
                <LibBooksItem book={book} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default LibraryList;
