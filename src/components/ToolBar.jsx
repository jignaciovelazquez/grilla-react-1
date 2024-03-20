import styles from "./ToolBar.module.css";
import { elementodered } from "../data/Pasivos";
import Model from "./model";

const pasivosList = elementodered.map(({id, type}) => {
  return <Model key={`key${id}`} id={id} type={type} />;
});

function ToolBar() {
  return (
      <div className={styles.bar}>{pasivosList}</div>
  );
}

export default ToolBar;
