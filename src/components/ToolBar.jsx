import styles from "./ToolBar.module.css";
import Model from "./Model";
import { useContext } from "react";
import { PassivesContext } from "../context/Contexts";

function ToolBar({setOpenCloseModal}) {
  
  const networkElements = useContext(PassivesContext);

  const modelList = networkElements.map(({ id, type }) => {
    return <Model key={`key${id}`} id={id} type={type} updateElementNetwork={setOpenCloseModal} />;
  });

  return <div className={styles.bar}>{modelList}</div>;
}

export default ToolBar;
