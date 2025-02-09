import { useSelector } from "react-redux";
import RecBooksItem from "../components/RecBooksItem/RecBooksItem";
//import RecommendedList from "../components/RecommendedList/RecommendedList";
import { getFavorites } from "../redux/libraryBooks/selectors";
import img from "../assets/Images/bigbooks.png";

const LibraryPage = () => {
  const books = useSelector(getFavorites);
  return (
    <div>
      {books.length === 0 && (
        <div>
          <img src={img} alt="camper-logo" />
          <p>
            To start training, add some of your books or from the recommended
            ones
          </p>
        </div>
      )}
      <ul>
        {books &&
          books.map((book) => {
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

export default LibraryPage;
