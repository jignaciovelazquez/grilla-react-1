import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import React, { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import DragDrop from "./components/DragDrop";

function App() {
  
  const [ShowArray, setShowArray] = useState("")
  
  const inMensaje = (array) => { 
    setShowArray(array) 
  }
  
  console.log("Arreglo desde APP",ShowArray);

  return (
    <>
      
      <DndProvider backend={HTML5Backend}>
        <NavBar />
        <ToolBar />
        <section id="canvas">
          <h1>Arrastre los elementos del Armado</h1>
          <DragDrop addMensaje={inMensaje}/>
        </section>
      </DndProvider>
      <Footer />
    </>
  );
}

export default App;
