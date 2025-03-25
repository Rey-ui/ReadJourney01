import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
import { useState } from "react";
//import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
const AppBar = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  const userData = useSelector(selectUserData);
  const [burger, setBurger] = useState(false);
  const toggleBurger = () => {
    setBurger((prevState) => !prevState);
  };
  return (
    <div className={css.UserBarWrapper}>
      <div className={css.UserBarUser}>
        <div className={css.UserBarAvatar}>{userData.name[0]}</div>
        <p className={css.UserBarName}>{userData.name}</p>
      </div>
      <button className={css.UserBarBtn} type="button" onClick={onLogOut}>
        Log out
      </button>
      <button className={css.LogoBurger} onClick={toggleBurger}>
        <svg className={css.LogoSvg} width="28" height="28">
          <use href={`${sprite}#icon-menu-04`}></use>
        </svg>
      </button>
      <BurgerMenu
        burger={burger}
        toggleBurger={toggleBurger}
        onLogOut={onLogOut}
      />
    </div>
  );
};

export default AppBar;
