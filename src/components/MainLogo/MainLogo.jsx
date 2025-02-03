import sprite from "../../assets/ReadIcons/symbol-defs.svg";
import css from "./MainLogo.module.css";

const MainLogo = ({ LogoWrapper }) => {
  return (
    <div className={css[LogoWrapper]}>
      <svg className={css.LogoSvg} width="42" height="17">
        <use href={`${sprite}#icon-journey-logo`}></use>
      </svg>
      <h3 className={css.LogoTitle}>read journey</h3>
    </div>
  );
};

export default MainLogo;
