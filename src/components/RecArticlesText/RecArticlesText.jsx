import img from "../../assets/Images/bookssmall.png";
import css from "./RecArticlesText.module.css";
const RecArticlesText = () => {
  return (
    <div className={css.ArticlesTextWrapper}>
      <img className={css.ArticlesTextImg} src={img} alt="Books" />
      <p className={css.ArticlesTextP}>
        &quot;Books are <span className={css.ArticlesTextSpan}>windows</span> to
        the world, and reading is a journey into the unknown.&quot;
      </p>
    </div>
  );
};

export default RecArticlesText;
