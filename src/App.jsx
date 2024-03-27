import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import DragDrop from "./components/DragDrop";
import "./App.css";
import { PassivesContext } from "./context/Contexts";
import { networkElement } from "./data/passives";
import { useState } from "react";
import { EditActiveElement } from "./components/dialogs/EditActiveElement";
import { EditPassiveElement } from "./components/dialogs/EditPassiveElement";

function App() {
  const [isDialogActiveOpen, openCloseActiveDialog] = useState(false);
  const [isDialogPassiveOpen, openClosePassiveDialog] = useState(false);

  const openDialog = (params, typeElement) => {
    if (typeElement === 'tap' || typeElement === 'pasivo') {
      openClosePassiveDialog(true);
    } else {
      openCloseActiveDialog(params);
    }
  }

  if (isDialogActiveOpen || isDialogPassiveOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <NavBar />
      <DndProvider backend={HTML5Backend}>
        <PassivesContext.Provider value={networkElement}>
          {isDialogActiveOpen && <EditActiveElement setCloseModal={openCloseActiveDialog} />}
          {isDialogPassiveOpen && <EditPassiveElement setCloseModal={openClosePassiveDialog} />}
          <ToolBar setOpenCloseModal={openDialog} />
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
