import styles from "./ToolBar.module.css";
import { networkElement } from "../data/passives";
import Model from "./Model";

const modelList = networkElement.map(({ id, type }) => {
  return <Model key={`key${id}`} id={id} type={type} />;
});

function ToolBar() {
  return (
    <>
      <div className={styles.bar}>{modelList}</div>
    </>
  );
}

export default ToolBar;
