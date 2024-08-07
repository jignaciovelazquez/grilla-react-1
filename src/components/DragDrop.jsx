import { useContext } from "react";
import { PassivesContext } from "../context/Contexts";
import Model from "./Model";
import { useState } from "react";
import { useDrop } from "react-dnd";
import styles from "./DragDrop.module.css";
import { cables } from "../data/cables";
import { Cable } from "./Figures/Cable";
import { Removable } from "./Containers/Removable";
import PropTypes from "prop-types";

function DragDrop({ handleSequence }) {
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

  const removeElement = (indexClicked) => {
    const newBoard = board.filter((element, index) => index !== indexClicked); //se puede usar el segundo argumento sin tener que definir una variable para el primero?

    setBoard(newBoard);
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
        {/*console.log("Arreglo de elementos",board)*/}

        {board.map(({ id, type, color }, index) => {
          if (type != "C") {
            return (
              <div className={styles.card} key={`key${index * 33}`}>
                <Removable
                  key={`key-${index}`}
                  id={id}
                  index={index}
                  removeElement={removeElement}>
                  <Model
                    key={`key${index}`}
                    id={id}
                    type={type}
                    dragElement={dragElement}
                  />
                </Removable>
              </div>
            );
          } else {
            return (
              <div className={styles.card} key={`key${index * 33}`}>
                <Removable
                  key={`key-${index}`}
                  id={id}
                  index={index}
                  removeElement={removeElement}>
                  <Cable color={color} />
                </Removable>
              </div>
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

DragDrop.propTypes = {
  handleSequence: PropTypes.func,
};

export default DragDrop;
