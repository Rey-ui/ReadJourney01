import { NavLink } from "react-router-dom";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
import css from "./RecSYW.module.css";
const RecSYW = () => {
  return (
    <div className={css.RecSYWWrapper}>
      <h3 className={css.RecSYWTitle}>Start your workout</h3>
      <div className={css.RecSYWContent}>
        <div className={css.RecSYWContentText}>
          <div className={css.RecSYWText}>
            <span className={css.RecSYWSpan}>1</span>
            <p className={css.RecSYWP}>
              <span className={css.RecSYWPS}>Create a personal library: </span>
              add the books you intend to read to it.
            </p>
          </div>
          <div className={css.RecSYWText}>
            <span className={css.RecSYWSpan}>2</span>
            <p className={css.RecSYWP}>
              <span className={css.RecSYWPS}>Create your first workout: </span>
              define a goal, choose a period, start training.
            </p>
          </div>
        </div>
        <div className={css.RecSYWNavCont}>
          <NavLink className={css.RecSYWNav} to="/library">
            <span className={css.RecSYWNavSpan}>My library</span>
            <svg className={css.svg} width="24" height="24">
              <use href={`${sprite}#icon-log-in-left`}></use>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RecSYW;
