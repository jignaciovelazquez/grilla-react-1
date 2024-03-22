import { networkElement } from "../data/passives";
import Model from "./Model";
import { useState } from "react";
import { useDrop } from "react-dnd";
import styles from "./DragDrop.module.css";

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (idx) => {
    const pictureDrop = networkElement.filter((picture) => idx === picture.id);
    setBoard((board) => [...board, pictureDrop[0]]);
    //setBoard([pictureDrop[0]]);
  };

  return (
    <>
      <div className={styles.Board} ref={drop}>
        {/*console.log("Arreglo de elementos",board)*/}
        {board.map(({ id, type }, index) => {
          return <Model key={`key${index}`} id={id} type={type} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;
