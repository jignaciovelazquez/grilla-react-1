import style from "./Model.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

function Model({ id, type, updateElementNetwork }) {
  const [, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const getFigureClassName = (type) => {
    if (type === "pasivo") {
      return style.coupler;
    } else if (type === "tap") {
      return style.square; // should be hexagon figure instead
    } else {
      return style.triangle;
    }
  };

  const openDialog = () => {
    updateElementNetwork(id, type);
  };

  return (
    <div className={style.container} ref={drag} onClick={openDialog}>
      <div className={getFigureClassName(type)}>
        <span>{id}</span>
      </div>
    </div>
  );
}

Model.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  updateElementNetwork: PropTypes.func,
};

export default Model;
