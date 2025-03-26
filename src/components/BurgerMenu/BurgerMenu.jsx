import css from "./BurgerMenu.module.css";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
const BurgerMenu = ({ burger, toggleBurger, onLogOut }) => {
  return (
    <div
      className={css.BurgerMenu}
      style={{
        display: burger ? "flex" : "none",
      }}
    >
      <button className={css.DetailsBtnClose} onClick={toggleBurger}>
        <svg className={css.LogoSvg} width="28" height="28">
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <ul className={css.UserNAvList}>
        <li className={css.UserNavItem}>
          <NavLink
            className={
              location.pathname === "/recommended"
                ? css.activeTab
                : css.buttonAddInfo
            }
            to="/recommended"
          >
            Home
          </NavLink>
        </li>
        <li className={css.UserNavItem}>
          <NavLink
            className={
              location.pathname === "/library"
                ? css.activeTab
                : css.buttonAddInfo
            }
            to="/library"
          >
            My library
          </NavLink>
        </li>
      </ul>
      <button className={css.BurgerBarBtn} type="button" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
};

export default BurgerMenu;
