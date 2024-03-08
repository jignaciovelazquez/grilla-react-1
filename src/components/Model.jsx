import React from "react";
import style from "./Model.module.css";

function Model(props) {
  return (
    <div className={style.burbuja}>
      <h4>{props.id}</h4>
    </div>
  );
}

export default Model;
