import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";

const AppBar = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  const userData = useSelector(selectUserData);
  return (
    <div>
      <div>{userData.name[0]}</div>
      <p>{userData.name}</p>
      <button type="button" onClick={onLogOut}>
        Log out
      </button>
    </div>
  );
};

export default AppBar;
