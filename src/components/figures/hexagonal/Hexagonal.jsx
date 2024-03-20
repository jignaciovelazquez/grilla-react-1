import styles from "./Hexagonal.module.css";
import PropTypes from 'prop-types';

export const Hexagonal = (props) => {
  return (
    <div className={styles.hexagonWrapper} >
      <div className={styles.hexagon} >
          {props.id}
      </div>
    </div>
  );
};


Hexagonal.propTypes = {
  id: PropTypes.string
}