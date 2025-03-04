import { useSelector } from "react-redux";
import { getFavorites } from "../../redux/libraryBooks/selectors";
import LibBooksItem from "../LibBooksItem/LibBooksItem";
import css from "./LibraryList.module.css";
import ModalBook from "../Modal/ModalBook";
//import RecBookDetails from "../RecBookDetails/RecBookDetails";
import { useState } from "react";
import LibraryBookDetails from "../LibraryBookDetails/LibraryBookDetails";

const LibraryList = () => {
  const books = useSelector(getFavorites);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleOpenModal = (_id) => {
    setIsModalOpen(true);
    setModalData(books.filter((book) => book._id === _id)[0]);
    openModal();
  };
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={css.LibraryListWrapper}>
      <ul className={css.LibraryList}>
        {books &&
          books.map((book) => {
            return (
              <li className={css.LibraryListItem} key={book._id}>
                <LibBooksItem book={book} handleOpenModal={handleOpenModal} />
              </li>
            );
          })}
      </ul>
      <ModalBook isOpen={isModalOpen}>
        <LibraryBookDetails modalData={modalData} closeModal={closeModal} />
      </ModalBook>
    </div>
  );
};

export default LibraryList;
