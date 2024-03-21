import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import React, { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import DragDrop from "./components/DragDrop";

function App() {
  
  const [mostrarArreglo, setMostrarArreglo] = useState("")
  
  const inMensaje = (arreglo) => { 
    setMostrarArreglo(arreglo) 
  }
  
  console.log("Arreglo desde APP",mostrarArreglo);

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
