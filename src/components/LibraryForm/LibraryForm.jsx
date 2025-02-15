import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthorFilter, setTitleFilter } from "../../redux/filter/slice";
// import { getAuthorFilter, getTitleFilter } from "../../redux/books/selectors";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Filters:</h3>
        <label>
          <span>Book title:</span>
          <input type="text" name="title" {...register("title")} />

          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <label>
          <span>The author:</span>
          <input type="text" name="author" {...register("author")} />
          {errors.author && <span>{errors.author.message}</span>}
        </label>
        <label>
          <span>Number of pages:</span>
          <input type="text" name="pages" {...register("pages")} />
          {errors.pages && <span>{errors.pages.message}</span>}
        </label>
      </div>

      <button
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
