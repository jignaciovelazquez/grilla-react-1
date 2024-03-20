import style from "./Model.module.css";
import PropTypes from 'prop-types';

function Model(props) {

  const getStyleFigure = () => {

    if (props.type === "pasivo") {
      return style.coupler;
    } else if (props.type === "tap") {
      return style.square; // should be hexagon figure instead
    } else {
      return style.triangle;
    }
  }

  return (
    <div className={style.container} onClick={props.updateElementNetwork}>
      <div className={getStyleFigure()}>
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
