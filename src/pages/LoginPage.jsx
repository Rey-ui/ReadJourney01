import axios from "axios";
import { useEffect, useState } from "react";
import RegTitle from "../components/RegTitle/RegTitle";
import MainLogo from "../components/MainLogo/MainLogo";
import IphonSign from "../components/IphonSign/IphonSign";
import LoginForm from "../components/LoginForm/LoginForm";
import css from "./RegisterPage.module.css";
const LoginPage = () => {
  const [books, setBooks] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://readjourney.b.goit.study/books/recommend/"
  //       );
  //       setBooks(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchData();
  // }, [books]);
  return (
    <div className={css.RegisterPageContainer}>
      <div className={css.RegisterPageContent}>
        <MainLogo />
        <RegTitle />
        <LoginForm />
      </div>
      <div className={css.RegisterPageImg}>
        <IphonSign />
      </div>
    </div>
  );
};

export default LoginPage;
