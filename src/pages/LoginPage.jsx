import axios from "axios";
import { useEffect, useState } from "react";
import RegTitle from "../components/RegTitle/RegTitle";
import MainLogo from "../components/MainLogo/MainLogo";

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
    <div>
      <MainLogo />
      <RegTitle />
      <div>{books}</div>
    </div>
  );
};

export default LoginPage;
