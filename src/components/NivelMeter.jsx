import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import ToolBar from "./ToolBar";
import DragDrop from "./DragDrop";
import { EditActiveElement } from "./dialogs/EditActiveElement";
import { EditPassiveElement } from "./dialogs/EditPassiveElement";

export function NivelMeter() {
  // dialogs
  const [isDialogActiveOpened, openCloseActiveDialog] = useState(false);
  const [isDialogPassiveOpened, openClosePassiveDialog] = useState(false);

  // id model selected
  const [networkElementId, setElementId] = useState("");

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

  return (
    <DndProvider backend={HTML5Backend}>
      {isDialogActiveOpened && (
        <EditActiveElement
          networkElementId={networkElementId}
          setCloseModal={openCloseActiveDialog}
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
        <DragDrop />
      </section>
    </DndProvider>
  );
}
