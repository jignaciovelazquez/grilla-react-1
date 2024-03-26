import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import DragDrop from "./components/DragDrop";
import "./App.css";
import {PassivesContext} from "./context/Contexts";
import {networkElement} from "./data/passives";

function App() {
  return (
    <>
      <NavBar />
      <DndProvider backend={HTML5Backend}>
        <PassivesContext.Provider value={networkElement} >
          <ToolBar />
          <section>
            <h1>Arrastre los elementos del Armado</h1>
            <DragDrop />
          </section>
        </PassivesContext.Provider>
      </DndProvider>
      <Footer />
    </>
  );
}

export default App;
