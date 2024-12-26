import css from "./RegTitle.module.css";

const RegTitle = () => {
  return (
    <h1 className={css.RegTitle}>
      Expand your mind, reading <span className={css.RegTitleSpan}>a book</span>
    </h1>
  );
};

export default RegTitle;
