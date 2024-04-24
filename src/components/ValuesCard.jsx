import styles from "./ValuesCard.module.css";

function ValuesCard() {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div>
          <input type="text" value={20} />
          <label>m</label>
          <select>
            <option value="value1" selected>
              X2
            </option>
            <option value="value2">X3</option>
          </select>
        </div>
        <p>Abonados</p>
        <div>
          <label>H:</label>
          <input type="text" readOnly />
        </div>
        <div>
          <label>L:</label>
          <input type="text" readOnly />
        </div>
        <div>
          <label>RH:</label>
          <input type="text" readOnly />
        </div>
        <div>
          <label>RL:</label>
          <input type="text" readOnly />
        </div>
      </div>
    </div>
  );
}

export default ValuesCard;
