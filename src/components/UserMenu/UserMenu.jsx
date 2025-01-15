import { NavLink } from "react-router-dom";
import MainLogo from "../MainLogo/MainLogo";
import AppBar from "../AppBar/AppBar";
import css from "./UserMenu.module.css";
import { useState } from "react";
const UserMenu = () => {
  const LogoWrapper = "LogoWrapperMenu";
  const [activeTab, setActiveTab] = useState("Home");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <nav className={css.UserNAvWrapper}>
      <MainLogo LogoWrapper={LogoWrapper} />
      <ul className={css.UserNAvList}>
        <li className={css.UserNavItem}>
          <NavLink
            onClick={() => handleTabChange("Home")}
            className={activeTab === "Home" ? css.activeTab : css.buttonAddInfo}
            to="/recommended"
          >
            Home
          </NavLink>
        </li>
        <li className={css.UserNavItem}>
          <NavLink
            onClick={() => handleTabChange("My")}
            className={activeTab === "My" ? css.activeTab : css.buttonAddInfo}
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
