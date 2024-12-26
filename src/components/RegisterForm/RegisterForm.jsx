import { useForm } from "react-hook-form";
import * as Yup from "yup";
//import css from "./RegisterForm.module.css";
//import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { NavLink } from "react-router-dom";
//import { apiRegisterUser } from "../redux/auth/operations";
import css from "./RegisterForm.module.css";

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required!")
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});
// const INITIAL_FORM_DATA = {
//   name: "",
//   email: "",
//   password: "",
// };

const RegisterForm = () => {
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(UserRegisterSchema), // Подключаем Yup для валидации
  });
  const [visible, setVisible] = useState(false);
  const isVisible = () => {
    setVisible((prevState) => !prevState);
  };
  const onSubmit = (values) => {
    // dispatch(
    //   apiRegisterUser({
    //     name: values.name,
    //     email: values.email,
    //     password: values.password,
    //   })
    // )
    //   .unwrap()
    //   .then(() => {
    //     console.log("login success");
    //   })
    //   .catch(() => {
    //     console.log("login error");
    //   });
    console.log(values);
    reset();
    return false;
  };
  return (
    <form className={css.Form} onSubmit={handleSubmit(onSubmit)}>
      <label className={css.FormLabel}>
        <input
          className={css.FormInput}
          placeholder="Name:"
          type="text"
          name="name"
          {...register("name")}
        />
        {errors.name && (
          <span className={css.FormError}>{errors.name.message}</span>
        )}
      </label>
      <label className={css.FormLabel}>
        <input
          className={css.FormInput}
          placeholder="Mail:"
          type="text"
          name="email"
          {...register("email")}
        />
        {errors.email && (
          <span className={css.Form}>{errors.email.message}</span>
        )}
      </label>
      <label className={css.FormLabel}>
        <input
          className={css.FormInput}
          placeholder="Password:"
          type={visible ? "text" : "password"}
          name="password"
          {...register("password")}
        />
        <button className={css.Form} onClick={isVisible}>
          X
        </button>
        {errors.password && (
          <span className={css.Form}>{errors.password.message}</span>
        )}
      </label>

      <button
        className={css.FormButtonEye}
        type="submit"
        title="Click to register user"
        aria-label="Add new mailbox"
      >
        Registration
      </button>
      <NavLink className={css.FormButton} to="/login">
        Already have an account?
      </NavLink>
    </form>
  );
};

export default RegisterForm;
