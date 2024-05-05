import { useContext } from "react";
import { PassivesContext } from "../context/Contexts";
import Model from "./Model";
import { useState } from "react";
import { useDrop } from "react-dnd";
import styles from "./DragDrop.module.css";
import { cables } from "../data/cables";
import { Cable } from "./Figures/Cable";
import { Removable } from "./Containers/Removable";

function DragDrop() {
  const networkElements = useContext(PassivesContext);
  const [board, setBoard] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addElement(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addElement = (idx) => {
    const pictureDrop = networkElements.filter((picture) => idx === picture.id);

    if (pictureDrop.length === 0) {
      pictureDrop.push(findCable(idx));
    }
    setBoard((board) => [...board, pictureDrop[0]]);
    //setBoard([pictureDrop[0]]);
  };
  
  const removeElement = (idClicked) => {

    const newBoard = board.filter((element) => element.id !== idClicked);

    setBoard(newBoard);
  }

  const findCable = (idx) => {
    return cables.find((cable) => cable.id === idx);
  };

  let dragElement = 1;

  return (
    <div className={styles.Board} ref={drop}>
      {/*console.log("Arreglo de elementos",board)*/}

      {board.map(({ id, type, color }, index) => {
        if (type != "C") {
          return (
            <Model
              key={`key${index}`}
              id={id}
              type={type}
              dragElement={dragElement}
            />
          );
        } else {
          return (
            <Removable id={id} key={`key-${index}`} removeElement={removeElement}>
              <Cable color={color} />
            </Removable>
          );
        }
      })}
    </div>
  );
}

export default DragDrop;
