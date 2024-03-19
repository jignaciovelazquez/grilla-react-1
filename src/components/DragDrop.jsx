import React, { useState } from "react";
import Pictures from "./Pictures";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
    {
        id: 1,
        url: "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png",
    },
    {
        id: 2,
        url: "https://cdn.iconscout.com/icon/free/png-256/free-amazon-2296099-1912058.png",
    },
    {
        id: 3,
        url: "https://upload.wikimedia.org/wikipedia/commons/2/21/YouTube_icon_%282011-2013%29.svg",
    },
    {
        id: 4,
        url: "https://static-00.iconduck.com/assets.00/whatsapp-icon-256x256-4tah7p12.png",
    }
];

console.log("PictureList: ",PictureList);
console.log("id: ",PictureList[0].id);
console.log("url: ",PictureList[1].url);

function DragDrop() {
    const [board, setBoard] = useState ([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
//******************************************************************************************** */
    const addImageToBoard = (iden) => {
        console.log(iden)
        const pictureDrop = PictureList.filter((picture) => {
            console.log(iden)
            console.log(picture.id)
            iden === picture.id
        });
        //setBoard([pictureDrop[0]]);
    };

    return (
        <>
            <div></div>
            <br></br>
            <div className="Pictures">{
                PictureList.map(({id, url}) => {
                    return <Pictures key={`key${id}`} id={id} url={url}/>
                })

            }</div>
            <br></br>
            <div className="Board" ref={drop}>{board.map(() => {
                return <Pictures key={`key1${id}`} id={id} url={url} />
                })}
            </div>
        </>
    )
}

export default DragDrop