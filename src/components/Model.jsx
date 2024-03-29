import style from "./Model.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

function Model({ id, type }) {
  const [, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (type === "pasivo") {
    return (
      <div className={style.container} ref={drag}>
        <div className={style.coupler}>
        </div>
          <span>{id}</span>
      </div>
    );
  }
  if (type === "tap") {
    return (
      <div className={style.container} ref={drag}>
        <div className={style.square}>
        </div>
          <span>{id}</span>
      </div>
    );
  } else {
    return (
      <div className={style.container} ref={drag}>
        <div className={style.triangle}>
        </div>
          <span>{id}</span>
      </div>
    );
  }
}

Model.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Model;
