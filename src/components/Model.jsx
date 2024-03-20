import style from "./Model.module.css";
import PropTypes from 'prop-types';
import { Hexagonal } from "./figures/hexagonal/Hexagonal";

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
      //   <div className={style.square}>
      //     <span>{props.id}</span>
      //   </div>	
      <div className={style.container}>
        <Hexagonal id={props.id} />
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
