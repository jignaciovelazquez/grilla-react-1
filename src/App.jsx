import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import "./App.css";
//import Model from "./components/Model";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import DragDrop from "./components/DragDrop";

function App() {



  return (
    <>
      
      <DndProvider backend={HTML5Backend}>
        <NavBar />
        <ToolBar />
        <section id="canvas">
          <h1>Arrastre los elementos del Armado</h1>
            <DragDrop />
        </section>
        </DndProvider>
      <Footer />
    </>
  );
}

export default App;
