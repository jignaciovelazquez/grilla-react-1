import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <span>
        Desarrollado para Gestion de Procesos y Servicios S.A. al servicio de
        TELECENTRO
      </span>
      <span>By Ing. Ignacio Velazquez</span>
      <span>jvelazquez@gdp.com.ar</span>
      <span>V0.1</span>
    </div>
  );
}

export default Footer;
