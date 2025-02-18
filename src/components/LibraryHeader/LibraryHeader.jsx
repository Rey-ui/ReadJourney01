import css from "./LibraryHeader.module.css";
import sprite from "../../assets/ReadIcons/symbol-defs.svg";
import { useState } from "react";
const LibraryHeader = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  // const [svgPopover, setSvgPopover] = useState('chevron-down');
  // const userDataName = useSelector(selectName);
  // const userDataAvatar = useSelector(selectAvatar);
  // const popoverRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen((prevState) => !prevState);
    // setSvgPopover(prevState =>
    //   prevState === 'chevron-down' ? 'chevron-up' : 'chevron-down'
    // );
  };
  return (
    <div className={css.LibraryHeaderWrapper}>
      <h2 className={css.LibraryHeaderTitle}>My library</h2>
      <div className={css.LibraryHeaderSelectWrapper}>
        <select
          className={css.LibraryHeaderSelect}
          //onFocus={() => togglePopover(true)}
          onClick={togglePopover}
          onBlur={togglePopover}
          // onBlur={() => togglePopover(false)}
          onChange={() => togglePopover}
        >
          {/* <option>Select...</option> */}
          <option className={css.LibraryHeaderOption} value="option1">
            Option 1
          </option>
          <option className={css.LibraryHeaderOption} value="option2">
            Option 2
          </option>
          <option className={css.LibraryHeaderOption} value="option3">
            Option 3
          </option>
          <option className={css.LibraryHeaderOption} value="option4">
            Option 4
          </option>
        </select>
        <svg className={css.svg} width="10" height="6">
          <use
            href={
              isPopoverOpen
                ? `${sprite}#icon-Vector-up`
                : `${sprite}#icon-Vector-down`
            }
          ></use>
        </svg>
      </div>
    </div>
  );
};

export default LibraryHeader;
