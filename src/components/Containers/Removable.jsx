import { useState } from "react";
import style from "./Removable.module.css";
import PropTypes from "prop-types";
import { IconTrash } from "../UI/IconTrash";

export function Removable({ id, children }) {

  const [hasIcon, toggleIcon] = useState(true);

  const handleOverIn = () => {
    toggleIcon(true);
    console.log("over");
  };

  const handleOverOut = () => {
    toggleIcon(false);
    console.log("chao");
  };

  return (
    <div
      className={style.menu}
      onMouseOver={handleOverIn}
      onMouseOut={handleOverOut}
    >
      <div className={style.element}>
        <IconTrash/>
      </div>
      <div className={style.element}>
        {children}
        <span>{id}</span>
      </div>
    </div>
  );
}

Removable.propTypes = {
  children: PropTypes.element,
  id: PropTypes.string,
};
