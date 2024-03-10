import React from "react";
import style from "./Model.module.css";

function Model(props) {
  if (props.type == "pasivo"){
    return (
    <div className={style.burbuja}>
      <h4>{props.id}</h4>
    </div>
    )
  }
  else{
    return (
    <div className={style.burbuja2}>
      <h4>{props.id}</h4>
    </div>
    )

  }
}

export default Model;
