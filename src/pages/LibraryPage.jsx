import { useSelector } from "react-redux";
import { getFavorites } from "../redux/libraryBooks/selectors";
//import LibBooksItem from "../components/LibBooksItem/LibBooksItem";
import { useLocation } from "react-router-dom";
import ModalSuccess from "../components/Modal/ModalSuccess";
import ModalSuccessInfo from "../components/ModalSuccessInfo/ModalSuccessInfo";
import { useState } from "react";
import LibraryClear from "../components/LibraryClear/LibraryClear";
import { selectError, selectIsLoading } from "../redux/books/selectors";
import LibraryList from "../components/LibraryList/LibraryList";
import LibraryDashboard from "../components/LibraryDashboard/LibraryDashboard";
import LibraryHeader from "../components/LibraryHeader/LibraryHeader";
import css from "./LibraryPage.module.css";

const LibraryPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useLocation();
  const books = useSelector(getFavorites);

  //const showModal = location.state?.showSuccessModal || false;
  const [isModalOpen, setIsModalOpen] = useState(
    location.state?.showSuccessModal || false
  );
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={css.LibraryPageContainer}>
      <div className={css.LibraryDashboard}>
        <LibraryDashboard />
      </div>

      <div className={css.LibraryListContainer}>
        <LibraryHeader />
        {books.length === 0 && <LibraryClear />}
        {isLoading && !error ? <div>loading...</div> : <LibraryList />}
      </div>
      {isModalOpen && (
        <ModalSuccess isOpen={true} closeModal={closeModal}>
          <ModalSuccessInfo closeModal={closeModal} />
        </ModalSuccess>
      )}
    </div>
  );
};

export default LibraryPage;
