import styles from "./ToolBar.module.css";
import { elementodered } from "../data/pasivos";
import Model from "./Model";

const pasivosList = elementodered.map(({id, type}) => {
  return <Model key={`key${id}`} id={id} type={type} />;
});

function ToolBar() {
  return (
    <div>
      <div className={styles.bar}>{pasivosList}</div>
    </div>
  );
}

export default ToolBar;
