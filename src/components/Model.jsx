import style from "./Model.module.css";
import PropTypes from 'prop-types';

function Model(props) {
  if (props.type === "pasivo") {
    return (
      <div className={style.container}>
        <div className={style.coupler}>
          <span>{props.id}</span>
        </div>
      </div>
    );
  }
  if (props.type === "tap") {
    return (
      <div className={style.container}>
        <div className={style.square}>
          <span>{props.id}</span>
        </div>	
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <div className={style.triangle}>
          <span>{props.id}</span>
        </div>
      </div>
    );
  }
}

Model.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string
}

export default Model;
