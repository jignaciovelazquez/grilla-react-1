import style from "./Container.module.css";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";

export function ContainerDraggable({ id, children }) {
  const [, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={style.container} ref={drag}>
      {children}
      <span>{id}</span>
    </div>
  );
}

ContainerDraggable.propTypes = {
  children: PropTypes.children,
  id: PropTypes.string,
};
