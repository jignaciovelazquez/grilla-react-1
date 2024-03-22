import style from "./ModelList.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

function ModelList({ id, type }) {
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
          <span>{id}</span>
        </div>
      </div>
    );
  }
  if (type === "tap") {
    return (
      <div className={style.container} ref={drag}>
        <div className={style.square}>
          <span>{id}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.container} ref={drag}>
        <div className={style.triangle}>
          <span>{id}</span>
        </div>
      </div>
    );
  }
}

ModelList.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
};

export default ModelList;
