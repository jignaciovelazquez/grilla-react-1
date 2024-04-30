import { useContext } from "react";
import { PassivesContext } from "../context/Contexts";
import Model from "./Model";
import { useState } from "react";
import { useDrop } from "react-dnd";
import styles from "./DragDrop.module.css";
import { cables } from "../data/cables";
import { Cable } from "./Figures/Cable";
import { Container } from "./Containers/Container";
import ValuesCard from "./ValuesCard";

function DragDrop({ handleSequence }) {
  const networkElements = useContext(PassivesContext);
  const [board, setBoard] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (idx) => {
    const pictureDrop = networkElements.filter((picture) => idx === picture.id);

    if (pictureDrop.length === 0) {
      pictureDrop.push(findCable(idx));
    }
    setBoard((board) => [...board, pictureDrop[0]]);
    //setBoard([pictureDrop[0]]);
  };

  const findCable = (idx) => {
    return cables.find((cable) => cable.id === idx);
  };

  const setParam = () => {
    handleSequence(board);
  };

  let dragElement = 1;

  return (
    <>
      <div className={styles.Board} ref={drop}>
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
                <Cable color={color} enable={1} />
              </Container>
            );
          }
        })}
      </div>
      {
        setParam() /************************************************************* */
      }
    </>
  );
}

export default DragDrop;
