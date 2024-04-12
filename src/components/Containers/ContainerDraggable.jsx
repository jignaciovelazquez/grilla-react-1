import style from "./Container.module.css";
import { useDrag } from "react-dnd";

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
