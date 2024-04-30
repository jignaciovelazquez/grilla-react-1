import styles from "./ValuesCard.module.css";

function ValuesCard({ sequence }) {
  return (
    <div className={styles.valuesCard}>
      {sequence.map(
        ({ id, type, name, F_hight, F_low, R_hight, R_low }, index) => {
          return (
            <div className={styles.card} key={`key${index}`}>
              <div className={styles.container}>
                <div>
                  <input type="text" value={30} />
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
                  <label>{name}</label>
                </div>
                <div>
                  <label>H:</label>
                  <input type="text" value={F_hight} readOnly />
                </div>
                <div>
                  <label>L:</label>
                  <input type="text" value={F_low} readOnly />
                </div>
                <div>
                  <label>RH:</label>
                  <input type="text" value={R_hight} readOnly />
                </div>
                <div>
                  <label>RL:</label>
                  <input type="text" value={R_low} readOnly />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default ValuesCard;
