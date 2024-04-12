import style from "./Container.module.css";
import PropTypes from "prop-types";

export function Container({ id, children }) {
  return (
    <div className={style.container}>
      {children}
      <span>{id}</span>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.children,
  id: PropTypes.string,
};
