import style from "./Model.module.css";
import PropTypes from 'prop-types';

function Model({id, type}) {
  if (type === "pasivo") {
    return (
      <div className={style.container}>
        <div className={style.coupler}>
          <span>{id}</span>
        </div>
      </div>
    );
  }
  if (type === "tap") {
    return (
      <div className={style.container}>
        <div className={style.square}>
          <span>{id}</span>
        </div>	
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <div className={style.triangle}>
          <span>{id}</span>
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
