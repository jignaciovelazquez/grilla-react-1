import { useDrag } from "react-dnd";

function Pictures({id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <img 
            ref={drag} 
            id={id} 
            src={url} 
            width="90px" 
            style={{border: isDragging ? "5px solid pink" : "0px"}}
        />
    );
}

export default Pictures