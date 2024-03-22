import styles from "./ToolBar.module.css";
import { networkElement } from "../data/passives";
import ModelList from "./ModelList";

const elementList = networkElement.map(({ id, type }) => {
  return <ModelList key={`key${id}`} id={id} type={type} />;
});

function ToolBar() {
  return (
    <>
      <div className={styles.bar}>{elementList}</div>
    </>
  );
}

export default ToolBar;
