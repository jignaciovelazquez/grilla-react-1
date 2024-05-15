import { useContext } from "react";
import { PassivesContext } from "../context/Contexts";
import styles from "./ValuesCard.module.css";
import Table from "./Table";

function ValuesCard({ sequence }) {
  const networkElements = useContext(PassivesContext);
  let H = 0;
  let L = 0;
  let RH = 0;
  let RL = 0;

  return (
    <div className={styles.valuesCard}>
      {sequence.map(({ id, name, type }, index) => {
        const updateElement = networkElements.filter(
          (element) => id === element.id
        );

        if (type != "C") {
          if (index == 0) {
            H = updateElement[0].F_hight;
            L = updateElement[0].F_low;
            RH = updateElement[0].R_hight;
            RL = updateElement[0].R_low;
          } else {
            H = H - updateElement[0].attenuation;
            L = L - updateElement[0].attenuation;
            RH = RH + updateElement[0].insertion;
            RL = RL + updateElement[0].insertion;
          }
          return (
            <div className={styles.card} key={`key${index + 33}`}>
              <div className={styles.container}>
                <div>
                  <p>Abonados</p>
                  <input type="text" defaultValue={30} />
                  <label>m</label>
                  <select>
                    <option value="value1" defaultValue>
                      X2
                    </option>
                    <option value="value2">X3</option>
                  </select>
                </div>
                <Table
                  key={`key${index + 77}`}
                  name={name}
                  H={H}
                  L={L}
                  RH={RH}
                  RL={RL}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className={styles.card} key={`key${index + 55}`}>
              <div className={styles.container}>
                <label>{name}</label>
                <div id="m" className={styles.distance}>
                  <input type="text" />
                  <label>m</label>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ValuesCard;