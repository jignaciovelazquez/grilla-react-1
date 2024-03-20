import styles from "./ToolBar.module.css";
import { elementodered } from "../data/pasivos";
import Model from "./model";
import { DialogEditElement } from "./dialogs/DialogEditElement";
import { useState } from "react";

function ToolBar() {
  const [isDialogOpen, setModalOpen] = useState(false);

  const pasivosList = elementodered.map(({ id, type }) => {
    return (
      <Model
        key={`key${id}`}
        id={id}
        type={type}
      />
    );
  });

  return (
    <div>
      <div className={styles.bar} onClick={() => {
          console.log('please open the modal');
          setModalOpen(true);
        }}>{pasivosList}</div>
      {isDialogOpen && <DialogEditElement setOpenModal={setModalOpen} />}
    </div>
  );
}

export default ToolBar;
