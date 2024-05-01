import Model from "./Model";
import { useState } from "react";
import { useDrop } from "react-dnd";
import styles from "./DragDrop.module.css";
import { Cable } from "./Figures/Cable";
import { Container } from "./Containers/Container";
import { useElementStore } from "../store/elementStore";

function DragDrop() {

  const activesState = useElementStore((state) => state.actives);
  const passivesState = useElementStore((state) => state.passives);
  const cablesState = useElementStore((state) => state.cables);

  const [board, setBoard] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (idx) => {
    const pictureDrop = [...activesState, ...passivesState].filter((picture) => idx === picture.id);

    if (pictureDrop.length === 0) {
      pictureDrop.push(findCable(idx));
    }
    setBoard((board) => [...board, pictureDrop[0]]);
    //setBoard([pictureDrop[0]]);
  };

  const findCable = (idx) => {
    return cablesState.find((cable) => cable.id === idx);
  };

  let dragElement = 1;

  return (
    <>
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
              <Container id={id} key={`key-${index}`}>
                <Cable color={color} />
              </Container>
            );
          }
        })}
      </div>
    </>
  );
}

export default DragDrop;
