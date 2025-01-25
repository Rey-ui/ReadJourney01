import { NavLink, useLocation } from "react-router-dom";
import MainLogo from "../MainLogo/MainLogo";
import AppBar from "../AppBar/AppBar";
import css from "./UserMenu.module.css";
const UserMenu = () => {
  const LogoWrapper = "LogoWrapperMenu";

  const location = useLocation();
  return (
    <nav className={css.UserNAvWrapper}>
      <MainLogo LogoWrapper={LogoWrapper} />
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
      <AppBar />
    </nav>
  );
};

export default UserMenu;
