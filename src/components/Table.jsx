import React from "react";
import styles from "./Table.module.css";

function Table({ name, H = 0, L = 0, RH = 0, RL = 0 }) {
  return (
    <div className={styles.container}>
      <div>
        <label>{name}</label>
      </div>
      <div>
        <label>H:</label>
        <input type="text" value={H} readOnly />
      </div>
      <div>
        <label>L:</label>
        <input type="text" value={L} readOnly />
      </div>
      <div>
        <label>RH:</label>
        <input type="text" value={RH} readOnly />
      </div>
      <div>
        <label>RL:</label>
        <input type="text" value={RL} readOnly />
      </div>
    </div>
  );
}

export default Table;
