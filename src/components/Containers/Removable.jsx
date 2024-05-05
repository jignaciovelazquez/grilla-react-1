import { container, element } from "./Removable.module.css";
import PropTypes from "prop-types";
import { IconTrash } from "../UI/IconTrash";

export function Removable({ id, children }) {

  return (
    <div className={container}>
      <div className={element}>
        {children}
        <span>{id}</span>
      </div>
      <div className={element}>
        <IconTrash />
      </div>
    </div>
  );
}

Removable.propTypes = {
  children: PropTypes.element,
  id: PropTypes.string,
};
