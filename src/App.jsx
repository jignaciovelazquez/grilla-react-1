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
      
      <NavBar />
      <ToolBar />
      <section>
        <canvas id="canvas"></canvas>
      </section>
      <DndProvider backend={HTML5Backend}>
        <DragDrop />
      </DndProvider>
      <Footer />
    </>
  );
}

export default App;
