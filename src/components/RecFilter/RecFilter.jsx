import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorFilter, setTitleFilter } from "../../redux/filter/slice";
import { getAuthorFilter, getTitleFilter } from "../../redux/books/selectors";
import css from "./RecFilter.module.css";

const UserRegisterSchema = Yup.object().shape({
  title: Yup.string()
    .required("Email is required!")
    .min(2, "Password must be at least 8 characters!"),
  author: Yup.string()
    .required("Password is required!")
    .min(2, "Password must be at least 8 characters!"),
});

const RecFilter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(getTitleFilter);
  const authorFilter = useSelector(getAuthorFilter);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserRegisterSchema),
    defaultValues: {
      title: titleFilter,
      author: authorFilter,
    },
  });
  const onSubmit = (values) => {
    dispatch(setTitleFilter(values.title));
    dispatch(setAuthorFilter(values.author));
    console.log(values);
    reset();
    return false;
  };

  return (
    <form className={css.RecFilterForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.RecFilterInputWrapper}>
        <h3 className={css.RecFilterTitle}>Filters:</h3>
        <label className={css.RecFilterLabel}>
          <span className={css.RecFilterInputSpan}>Book title:</span>
          <input
            className={css.RecFilterInput}
            type="text"
            name="title"
            {...register("title")}
          />

          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <label className={css.RecFilterLabel}>
          <span className={css.RecFilterInputSpan}>The author:</span>
          <input
            className={css.RecFilterInput}
            type="text"
            name="author"
            {...register("author")}
          />
          {errors.author && <span>{errors.author.message}</span>}
        </label>
      </div>

      <button
        className={css.RecFilterBtn}
        type="submit"
        title="Click to login user"
        aria-label="Add new mailbox"
      >
        To apply
      </button>
    </form>
  );
};

export default RecFilter;
