import RegTitle from "../components/RegTitle/RegTitle";
import MainLogo from "../components/MainLogo/MainLogo";
import IphonSign from "../components/IphonSign/IphonSign";
import LoginForm from "../components/LoginForm/LoginForm";
import css from "./RegisterPage.module.css";

const LoginPage = () => {
  const LogoWrapper = "LogoWrapper";
  return (
    <div className={css.RegisterPageContainer}>
      <div className={css.RegisterPageContent}>
        <MainLogo LogoWrapper={LogoWrapper} />
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
