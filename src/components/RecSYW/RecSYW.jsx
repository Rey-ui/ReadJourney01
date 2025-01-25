import { NavLink } from "react-router-dom";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
import css from "./RecSYW.module.css";
const RecSYW = () => {
  return (
    <div>
      <h3></h3>
      <div>
        <div>
          <div>
            <span></span>
            <p></p>
          </div>
          <div>
            <span></span>
            <p></p>
          </div>
        </div>
        <div>
          <NavLink to="/library">Don’t have an account?</NavLink>
          <svg className={css.svgg} width="42" height="17">
            <use href={`${sprite}#icon-log-in-left`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RecSYW;
