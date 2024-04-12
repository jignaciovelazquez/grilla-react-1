import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        NIVELMETER es una WebApp para el calculo de los niveles de perdidas y
        ganancias de señal para armados de equipos de tecnologia HFC.
      </p>
      <hr></hr>
      <p>developed by</p>
      <p>
        <a href="https://github.com/jignaciovelazquez" target="_blank">
          NagcioDev
        </a>{" "}
        &{" "}
        <a href="https://github.com/YisusW" target="_blank">
          YisusDev
        </a>
      </p>
      <p>V0.0.1</p>
    </div>
  );
}

export default Footer;
