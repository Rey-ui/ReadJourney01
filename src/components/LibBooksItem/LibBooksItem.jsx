//import css from "./RecBooksItem.module.css";

import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/libraryBooks/slice";

const LibBooksItem = ({ book, handleOpenModal }) => {
  const dispatch = useDispatch();
  const handleToggleFav = () => {
    dispatch(removeFavorite(book._id));
  };
  return (
    <div>
      <button onClick={() => handleOpenModal(book._id)}>
        <img src={book.imageUrl} alt={book.title} />
      </button>
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <button onClick={handleToggleFav}>X</button>
    </div>
  );
};

export default LibBooksItem;
