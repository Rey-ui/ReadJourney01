import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
const AppBar = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  const userData = useSelector(selectUserData);
  return (
    <div className={css.UserBarWrapper}>
      <div className={css.UserBarUser}>
        <div className={css.UserBarAvatar}>{userData.name[0]}</div>
        <p className={css.UserBarName}>{userData.name}</p>
      </div>
      <button className={css.UserBarBtn} type="button" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
};

export default AppBar;
