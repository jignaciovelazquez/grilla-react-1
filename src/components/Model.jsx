import style from "./Model.module.css";
import PropTypes from 'prop-types';

function Model(props) {

  const getFigureClassName = (type) => {
    if (type === "pasivo") {
      return style.coupler;
    } else if (type === "tap") {
      return style.square; // should be hexagon figure instead
    } else {
      return style.triangle;
    }
  }

  return (
    <div className={style.container} onClick={props.updateElementNetwork}>
      <div className={getFigureClassName(props.type)}>
        <span>{props.id}</span>
      </div>
    </div>
  );

}

Model.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  updateElementNetwork: PropTypes.func
}

export default Model;
