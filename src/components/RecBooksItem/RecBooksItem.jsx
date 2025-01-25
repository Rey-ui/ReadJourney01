import css from "./RecBooksItem.module.css";

const RecBooksItem = ({ book }) => {
  return (
    <div className={css.RecItemWrapper}>
      <img className={css.RecItemImg} src={book.imageUrl} alt={book.title} />
      <div className={css.RecItemTextContent}>
        <h3 className={css.RecItemTitle}>{book.title}</h3>
        <p className={css.RecItemAuthor}>{book.author}</p>
      </div>
    </div>
  );
};

export default RecBooksItem;
