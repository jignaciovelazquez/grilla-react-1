import React, { useState } from "react";
import { elementodered } from "../data/pasivos";
import Model from "./Model";
import { useDrop } from "react-dnd";
import "../App.css";
import styles from "./DragDrop.module.css"


function DragDrop() {

    const [board, setBoard] = useState ([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (iden) => {
        const pictureDrop = elementodered.filter((picture) => iden === picture.id);
        setBoard((board) => [...board, pictureDrop[0]]);
        
        //setBoard([pictureDrop[0]]);
    };

    return (
        <>
            <div className={styles.Board} ref={drop}> 
                {console.log("Arreglo de elementos",board)}
                {board.map(({id, type},index) => {
                    return <Model key={`key${index}`} id={id} type={type} />;
                })}
            </div>
        </>
    )
}

export default DragDrop