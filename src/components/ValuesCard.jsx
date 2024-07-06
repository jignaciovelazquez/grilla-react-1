import { useContext, useState } from "react";
import { PassivesContext } from "../context/Contexts";
import styles from "./ValuesCard.module.css";
import Table from "./Table";
import PropTypes from "prop-types";
import { cables } from "../data/cables";

const DEFAULT_CABLE_VALUE = cables[0];

function ValuesCard({ sequence }) {
  const [cableMeters, updateCable] = useState(DEFAULT_CABLE_VALUE.meters);
  let cableIndex = null;

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
          if (cableIndex && index > cableIndex) {
            H = H - cableMeters * DEFAULT_CABLE_VALUE.attenuation;
            L = L - cableMeters * DEFAULT_CABLE_VALUE.attenuation;
          }
          return (
            <div className={styles.card} key={`key${index + 33}`}>
              <div className={styles.container}>
                <Table
                  key={`key${index + 77}`}
                  name={name}
                  type={type}
                  H={H}
                  L={L}
                  RH={RH}
                  RL={RL}
                />
              </div>
            </div>
          );
        } else {
          cableIndex = index;
          return (
            <div className={styles.card} key={`key-${index}-cable`}>
              <div className={styles.container}>
                <label>{name}</label>
                <div id="m" className={styles.distance}>
                  <input
                    name="operational-cable"
                    type="number"
                    placeholder="Metros"
                    value={cableMeters}
                    onChange={(e) => updateCable(e.target.value)}
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

ValuesCard.propTypes = {
  sequence: PropTypes.array,
};

export default ValuesCard;
