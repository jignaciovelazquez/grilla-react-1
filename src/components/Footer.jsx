import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        NIVELMETER es una WebAPP para el calculo de los niveles de perdidas y ganancias de señal para armado de equipos de tecnologia HFC. 
      </p>
      <p>By Ing. Ignacio Velazquez</p>
      <p>jignaciovelazquez@gmail.com</p>
      <p>V0.1</p>
    </div>
  );
}

export default Footer;
