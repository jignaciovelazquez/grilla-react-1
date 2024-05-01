import { useContext } from "react";
import { PassivesContext } from "../context/Contexts";
import styles from "./ValuesCard.module.css";
import Table from "./Table";

function ValuesCard({ sequence }) {
  const networkElements = useContext(PassivesContext);

  return (
    <div className={styles.valuesCard}>
      {sequence.map(({ id }, index) => {
        const updateElement = networkElements.filter(
          (element) => id === element.id
        );

        const {
          idx = id,
          type,
          name,
          F_hight,
          F_low,
          R_hight,
          R_low,
          attenuation,
          insertion,
        } = updateElement[0];

        console.log(
          idx,
          type,
          name,
          F_hight,
          F_low,
          R_hight,
          R_low,
          attenuation,
          insertion
        );

        if (index == 0 && type == "activo") {
          let H = F_hight;
          let L = F_low;
          let RH = R_hight;
          let RL = R_low;
        }

        return (
          <>
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
          </>
        );
      })}
    </div>
  );
}

export default ValuesCard;
