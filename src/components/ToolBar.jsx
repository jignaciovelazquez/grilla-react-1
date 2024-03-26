import styles from "./ToolBar.module.css";
import Model from "./Model";
import { useContext } from "react";
import { PassivesContext } from "../context/Contexts";

function ToolBar() {
  
  const networkElements = useContext(PassivesContext);
  const modelList = networkElements.map(({ id, type }) => {
    return <Model key={`key${id}`} id={id} type={type} />;
  });

  const [isDialogOpen, setModalOpen] = useState(false);

  const pasivosList = elementodered.map(({ id, type }) => {
    return (
      <Model
        key={`key${id}`}
        id={id}
        type={type}
        updateElementNetwork={setModalOpen}
      />
    );
  });

  return (
    <>
      <div className={styles.bar}>{modelList}</div>
      {isDialogOpen && <DialogEditElement setOpenModal={setModalOpen} />}
    </>
  );
}

export default ToolBar;
