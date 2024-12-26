import IphonSign from "../components/IphonSign/IphonSign";
import MainLogo from "../components/MainLogo/MainLogo";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import RegTitle from "../components/RegTitle/RegTitle";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.RegisterPageContainer}>
      <div className={css.RegisterPageContent}>
        <MainLogo />
        <RegTitle />
        <RegisterForm />
      </div>
      <div className={css.RegisterPageImg}>
        <IphonSign />
      </div>
    </div>
  );
};

export default RegisterPage;
