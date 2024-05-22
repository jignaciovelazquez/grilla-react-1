import style from "./Model.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

function Model({ id, type, updateElementNetwork, dragElement }) {
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
    // This validation was added in order to cover the implementation on component DragDrop
    // preventing the error when the user hit the click like models can do at the toolbar
    if (updateElementNetwork !== undefined) {
      updateElementNetwork(id, type);
    }
  };

  if (dragElement != 1) {
    return (
      <div className={style.container} ref={drag} onClick={openDialog}>
        <div className={getFigureClassName(type)}></div>
        <span>{id}</span>
      </div>
    );
  } else {
    return (
      <div className={style.container} onClick={openDialog}>
        <div className={getFigureClassName(type)}></div>
        <span>{id}</span>
      </div>
    );
  }
}

Model.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  updateElementNetwork: PropTypes.func,
  dragElement: PropTypes.number,
};

export default Model;
