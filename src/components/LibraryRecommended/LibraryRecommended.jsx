import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/books/selectors";
import { useState } from "react";
import ModalBook from "../Modal/ModalBook";
import RecBookDetails from "../RecBookDetails/RecBookDetails";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
import css from "./LibraryRecommended.module.css";
//import RecPaginationBtns from "../RecPaginationBtns/RecPaginationBtns";
//import RecBooksItem from "../RecBooksItem/RecBooksItem";
//import css from "./RecommendedList.module.css";
//import ModalBook from "../Modal/ModalBook";

const LibraryRecommended = () => {
  const books = useSelector(selectFilteredContacts);
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
    <div className={css.LibraryRecWrapper}>
      <h3 className={css.LibraryRecTitle}>Recommended books</h3>
      <ul className={css.LibraryRecList}>
        {books.slice(0, 3).map((book) => {
          return (
            <li className={css.LibraryRecItem} key={book._id}>
              <button
                className={css.LibraryRecBtn}
                onClick={() => handleOpenModal(book._id)}
              >
                <img
                  className={css.LibraryRecImg}
                  src={book.imageUrl}
                  alt={book.title}
                />
                <div className={css.LibraryRecContent}>
                  <h3 className={css.LibraryRecConTitle}>{book.title}</h3>
                  <p className={css.LibraryRecText}>{book.author}</p>
                </div>
              </button>
            </li>
          );
        })}
        <ModalBook isOpen={isModalOpen}>
          <RecBookDetails modalData={modalData} closeModal={closeModal} />
        </ModalBook>
      </ul>
      <NavLink className={css.LibraryRecNav} to="/recommended">
        <span className={css.LibraryRecNavSpan}>Home</span>
        <svg className={css.svg} width="24" height="24">
          <use href={`${sprite}#icon-log-in-left`}></use>
        </svg>
      </NavLink>
    </div>
  );
};

export default LibraryRecommended;
