import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.header}>
      <div className={styles.navBar}>
        <img className={styles.logoNIVELMETER} 
          src="../assets/L1-removebg-preview.png" 
          alt="logo_NIVELMETER"
        />
      </div>
    </div>
  );
}

export default NavBar;
