import RecArticlesText from "../RecArticlesText/RecArticlesText";
import RecFilter from "../RecFilter/RecFilter";
import RecSYW from "../RecSYW/RecSYW";
import css from "./RecArticles.module.css";

const RecArticles = () => {
  return (
    <div className={css.RecArticlesWrapper}>
      <RecFilter />
      <RecSYW />
      <RecArticlesText />
    </div>
  );
};

export default RecArticles;
