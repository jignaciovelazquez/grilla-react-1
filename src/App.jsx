import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import DragDrop from "./components/DragDrop";
import ValuesCard from "./components/ValuesCard";
import "./App.css";
import { PassivesContext } from "./context/Contexts";
import { networkElement } from "./data/passives";
import { useState } from "react";
import { EditActiveElement } from "./components/dialogs/EditActiveElement";
import { EditPassiveElement } from "./components/dialogs/EditPassiveElement";

function App() {
  // dialogs
  const [isDialogActiveOpened, openCloseActiveDialog] = useState(false);
  const [isDialogPassiveOpened, openClosePassiveDialog] = useState(false);
  // update network elements
  const [networkElements, setNetworkElement] = useState(networkElement);
  // id model selected
  const [networkElementId, setElementId] = useState("");

  const [sequence, setSequence] = useState([]);

  const openDialog = (id, typeElement) => {
    setElementId(id);
    if (typeElement === "tap" || typeElement === "pasivo") {
      openClosePassiveDialog(true);
    } else {
      openCloseActiveDialog(true);
    }
  };

  if (isDialogActiveOpened || isDialogPassiveOpened) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleSequence = (train) => {
    setSequence(train);
  };

  return (
    <>
      <NavBar />
      <DndProvider backend={HTML5Backend}>
        <PassivesContext.Provider value={networkElements}>
          {isDialogActiveOpened && (
            <EditActiveElement
              networkElementId={networkElementId}
              setCloseModal={openCloseActiveDialog}
              updateActiveSelected={setNetworkElement}
            />
          )}
          {isDialogPassiveOpened && (
            <EditPassiveElement
              networkElementId={networkElementId}
              setCloseModal={openClosePassiveDialog}
              updatePassiveSelected={setNetworkElement}
            />
          )}
          <ToolBar setOpenCloseModal={openDialog} />
          <section>
            <h1>Arrastre los elementos del Armado</h1>
            <DragDrop handleSequence={handleSequence} />
            <ValuesCard sequence={sequence} />
          </section>
        </PassivesContext.Provider>
      </DndProvider>
      <Footer />
    </>
  );
}

export default App;
