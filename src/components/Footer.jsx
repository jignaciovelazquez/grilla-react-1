import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <span>
        NIVELMETER es una WebAPP para el calculo de los niveles de perdidas y ganancias de señal para armado de equipos de tecnologia HFC. 
      </span>
      <span>By Ing. Ignacio Velazquez</span>
      <span>jignaciovelazquez@gmail.com</span>
      <span>V0.1</span>
    </div>
  );
}

export default Footer;
