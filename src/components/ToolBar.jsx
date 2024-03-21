import styles from "./ToolBar.module.css";
import { redElement } from "../data/pasivos";
import Model from "./Model";



const elementList = redElement.map(({id, type}) => {
  return <Model key={`key${id}`} id={id} type={type} />;
});

function ToolBar() {
  return (
    <>
      <div className={styles.bar}>{elementList}</div>
    </>
  );
}

export default ToolBar;
