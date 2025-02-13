import { useSelector } from "react-redux";
import { getFavorites } from "../../redux/libraryBooks/selectors";
import LibBooksItem from "../LibBooksItem/LibBooksItem";

const LibraryList = () => {
  const books = useSelector(getFavorites);
  return (
    <div>
      <ul>
        {books &&
          books.map((book) => {
            return (
              <li key={book._id}>
                <LibBooksItem book={book} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default LibraryList;
