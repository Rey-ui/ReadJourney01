import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/books/selectors";
import RecPaginationBtns from "../RecPaginationBtns/RecPaginationBtns";
import RecBooksItem from "../RecBooksItem/RecBooksItem";
import css from "./RecommendedList.module.css";
import ModalBook from "../Modal/ModalBook";
import RecBookDetails from "../RecBookDetails/RecBookDetails";
import { useState } from "react";

const RecommendedList = ({ page, setPage }) => {
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
    <div className={css.RecListWrapper}>
      <div className={css.RecListHeader}>
        <h2 className={css.RecListTitle}>Recommended</h2>
        <RecPaginationBtns page={page} setPage={setPage} />
      </div>

      <ul className={css.RecList}>
        {books.map((book) => {
          return (
            <li className={css.RecItem} key={book._id}>
              <RecBooksItem book={book} handleOpenModal={handleOpenModal} />
            </li>
          );
        })}
        <ModalBook isOpen={isModalOpen}>
          <RecBookDetails modalData={modalData} closeModal={closeModal} />
        </ModalBook>
      </ul>
    </div>
  );
};

export default RecommendedList;
