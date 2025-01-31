import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/books/selectors";
import { useEffect, useState } from "react";
import { fetchBooksRec } from "../redux/books/operations";
import RecommendedList from "../components/RecommendedList/RecommendedList";
import RecArticles from "../components/RecAritcles/RecArticles";
import css from "./RecommendedPage.module.css";

const RecommendedPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchBooksRec(page));
  }, [dispatch, page]);

  return (
    <div className={css.RecommendPageContainer}>
      <div className={css.RecommendRecArticles}>
        <RecArticles />
      </div>

      {isLoading && !error ? (
        <div>loading...</div>
      ) : (
        <RecommendedList page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default RecommendedPage;
