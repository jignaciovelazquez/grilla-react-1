import { useState } from "react";
import styles from "./Table.module.css";
import PropTypes from "prop-types";

function Table({ name, type, H = 0, L = 0, RH = 0, RL = 0 }) {
  const [subscriberPassive, setSubscriberPassive] = useState(1);

  function handleSubscriberPassiveChange(e) {
    setSubscriberPassive(parseInt(e.target.value, 10));
  }

  const [subscriberCable, setSubscriberCable] = useState(30);

  function handleSubscriberCableChange(e) {
    setSubscriberCable(e.target.value);
  }

  if (type != "activo") {
    return (
      <div className={styles.container}>
        <div>
          <label>{name}</label>
        </div>
        <div>
          <p>Abonados</p>
          <input
            type="text"
            onChange={handleSubscriberCableChange}
            defaultValue={30}
          />
          <label>m</label>
          <select onChange={handleSubscriberPassiveChange}>
            <option value="1" defaultValue>
              X2
            </option>
            <option value="2">X3</option>
          </select>
        </div>
        <div>
          <label>H:</label>
          <input
            type="text"
            value={H - subscriberPassive - subscriberCable * 0.25}
            readOnly
          />
        </div>
        <div>
          <label>L:</label>
          <input
            type="text"
            value={L - subscriberPassive - subscriberCable * 0.25}
            readOnly
          />
        </div>
        <div>
          <label>RH:</label>
          <input
            type="text"
            value={RH + subscriberPassive + subscriberCable * 0.25}
            readOnly
          />
        </div>
        <div>
          <label>RL:</label>
          <input
            type="text"
            value={RL + subscriberPassive + subscriberCable * 0.25}
            readOnly
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div>
          <label>{name}</label>
          <hr />
        </div>
        <div>
          <label>H:</label>
          <input type="text" value={H} readOnly />
        </div>
        <div>
          <label>L:</label>
          <input type="text" value={L} readOnly />
        </div>
        <div>
          <label>RH:</label>
          <input type="text" value={RH} readOnly />
        </div>
        <div>
          <label>RL:</label>
          <input type="text" value={RL} readOnly />
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  H: PropTypes.number,
  L: PropTypes.number,
  RH: PropTypes.number,
  RL: PropTypes.number,
};

export default Table;
