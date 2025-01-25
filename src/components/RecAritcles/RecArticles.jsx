import RecArticlesText from "../RecArticlesText/RecArticlesText";
import RecFilter from "../RecFilter/RecFilter";
import RecSYW from "../RecSYW/RecSYW";

const RecArticles = () => {
  return (
    <div>
      <RecFilter />
      <RecSYW />
      <RecArticlesText />
    </div>
  );
};

export default RecArticles;
