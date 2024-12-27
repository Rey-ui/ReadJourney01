import { useForm } from "react-hook-form";
import * as Yup from "yup";
//import css from "./RegisterForm.module.css";
//import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { NavLink } from "react-router-dom";
//import { apiRegisterUser } from "../redux/auth/operations";
import css from "./LoginForm.module.css";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";

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

const LoginForm = () => {
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
      <div className={css.FormContainer}>
        <label className={css.FormLabel}>
          <span className={css.FormLabelSpan}>Mail:</span>
          <input
            className={css.FormInput}
            //placeholder="Mail:"
            type="text"
            name="email"
            {...register("email")}
          />
          {errors.email && (
            <span className={css.FormError}>{errors.email.message}</span>
          )}
        </label>
        <label className={css.FormLabel}>
          <span className={css.FormLabelSpan}>Password:</span>
          <input
            className={css.FormInputPass}
            // placeholder="Password:"
            type={visible ? "text" : "password"}
            name="password"
            {...register("password")}
          />
          <button className={css.FormButtonEye} onClick={isVisible}>
            <svg className={css.LogoSvg} width="20" height="20">
              <use
                href={`${sprite}#${visible ? "icon-eye" : "icon-eye-off"}`}
              ></use>
            </svg>
          </button>
          {errors.password && (
            <span className={css.FormError}>{errors.password.message}</span>
          )}
        </label>
      </div>

      <div className={css.FormButtons}>
        <button
          className={css.FormButton}
          type="submit"
          title="Click to register user"
          aria-label="Add new mailbox"
        >
          Log In
        </button>
        <NavLink className={css.FormButtonNav} to="/register">
          Don’t have an account?
        </NavLink>
      </div>
    </form>
  );
};

export default LoginForm;
