import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthorFilter, setTitleFilter } from "../../redux/filter/slice";
// import { getAuthorFilter, getTitleFilter } from "../../redux/books/selectors";
import css from "./LibraryForm.module.css";
const UserRegisterSchema = Yup.object().shape({
  title: Yup.string()
    .required("Email is required!")
    .min(2, "Password must be at least 8 characters!"),
  author: Yup.string()
    .required("Password is required!")
    .min(2, "Password must be at least 8 characters!"),
  pages: Yup.number()
    .required("Password is required!")
    .min(1, "Password must be at least 8 characters!"),
});

const LibraryForm = () => {
  //   const dispatch = useDispatch();
  //   const titleFilter = useSelector(getTitleFilter);
  //   const authorFilter = useSelector(getAuthorFilter);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserRegisterSchema),
    defaultValues: {
      //   title: titleFilter,
      //   author: authorFilter,
    },
  });
  const onSubmit = (values) => {
    // dispatch(setTitleFilter(values.title));
    // dispatch(setAuthorFilter(values.author));
    console.log(values);
    reset();
    return false;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.LibraryForm}>
      <div className={css.LibraryFormInputs}>
        <h3 className={css.LibraryFormTitle}>Create your library:</h3>
        <label className={css.LibraryFormLabel}>
          <span className={css.LibraryFormSpan}>Book title:</span>
          <input
            className={css.LibraryFormInputT}
            type="text"
            name="title"
            {...register("title")}
          />

          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <label className={css.LibraryFormLabel}>
          <span className={css.LibraryFormSpan}>The author:</span>
          <input
            className={css.LibraryFormInput}
            type="text"
            name="author"
            {...register("author")}
          />
          {errors.author && <span>{errors.author.message}</span>}
        </label>
        <label className={css.LibraryFormLabel}>
          <span className={css.LibraryFormSpan}>Number of pages:</span>
          <input
            className={css.LibraryFormInputP}
            type="text"
            name="pages"
            {...register("pages")}
          />
          {errors.pages && <span>{errors.pages.message}</span>}
        </label>
      </div>

      <button
        className={css.LibraryFormBtn}
        type="submit"
        title="Click to login user"
        aria-label="Add new mailbox"
      >
        Add book
      </button>
    </form>
  );
};

export default LibraryForm;
