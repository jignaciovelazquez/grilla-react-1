import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.header}>
      <div className={styles.navBar}>
        <div>
          <img
            className={styles.logoGEPROSE}
            src="https://i.postimg.cc/rFYhmWT9/logo-GPSfull.png"
            alt="logo-GPSfull"
          />
        </div>

        <h1>Generador de Tickets de Diseño</h1>

        <div>
          <img
            className={styles.logoTELE}
            src="https://i.postimg.cc/wT58H4LH/logotele-letra.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
