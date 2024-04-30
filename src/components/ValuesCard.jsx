import styles from "./ValuesCard.module.css";

function ValuesCard({ sequence }) {
  return (
    <div className={styles.valuesCard}>
      {sequence.map(
        (
          {
            id,
            type,
            name,
            F_hight = 0,
            F_low = 0,
            R_hight = 0,
            R_low = 0,
            attenuation = 0,
            insertion = 0,
          },
          index
        ) => {
          return (
            <div className={styles.card} key={`key${index}`}>
              <div className={styles.container}>
                <div>
                  <p>Abonados</p>
                  <input type="text" value={30} />
                  <label>m</label>
                  <select>
                    <option value="value1" selected>
                      X2
                    </option>
                    <option value="value2">X3</option>
                  </select>
                </div>
                <div>
                  <label>{name}</label>
                </div>
                <div>
                  <label>H:</label>
                  <input
                    type="text"
                    value={F_hight != 0 ? F_hight : 40 + attenuation}
                    readOnly
                  />
                </div>
                <div>
                  <label>L:</label>
                  <input
                    type="text"
                    value={F_low != 0 ? F_low : 40 + attenuation}
                    readOnly
                  />
                </div>
                <div>
                  <label>RH:</label>
                  <input
                    type="text"
                    value={R_hight != 0 ? R_hight : 20 + insertion}
                    readOnly
                  />
                </div>
                <div>
                  <label>RL:</label>
                  <input
                    type="text"
                    value={R_low != 0 ? R_low : 20 + insertion}
                    readOnly
                  />
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
