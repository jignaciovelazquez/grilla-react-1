import React from "react";
import style from "./Model.module.css";

function Model(props) {
  if (props.type == "pasivo"){
    return (
      <div className={style.container}>
        <div className={style.coupler}>
          <spam>{props.id}</spam>
        </div>
      </div>
    )
  }
  if(props.type == "tap"){
    return (
      <div className={style.container}>
        <div className={style.square}>
          <spam>{props.id}</spam>
        </div>	
      </div>
    )
  }
  else{
    return (
      <div className={style.container}>
        <div className={style.triangle}>
          <spam>{props.id}</spam>
        </div>
      </div>
    )

  }
}

export default Model;
