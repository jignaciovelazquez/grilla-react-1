import React from "react";
import styles from "./ToolBar.module.css";
import elementodered from "../data/Pasivos";
import Model from "./model";

const pasivosList = elementodered.map((ele) => {
  return <Model id={ele.id} />;
});

function ToolBar() {
  return (
    <div>
      <div className={styles.bar}>{pasivosList}</div>
    </div>
  );
}

export default ToolBar;
