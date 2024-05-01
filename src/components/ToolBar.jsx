import styles from "./ToolBar.module.css";
import Model from "./Model";
import PropTypes from "prop-types";
import { Cable } from "./Figures/Cable";
import { ContainerDraggable } from "./Containers/ContainerDraggable";
import { useElementStore } from "../store/elementStore";

function ToolBar({ setOpenCloseModal }) {

  const activesState = useElementStore((state) => state.actives);
  const passivesState = useElementStore((state) => state.passives);
  const cablesState = useElementStore((state) => state.cables);

  const modelList = [...activesState, ...passivesState].map(({ id, type }) => {
    return (
      <Model
        key={`key${id}`}
        id={id}
        type={type}
        updateElementNetwork={setOpenCloseModal}
      />
    );
  });
 
  const cableList = cablesState.map(({id, color}, index) => {
    return (
      <ContainerDraggable id={id} key={`key-${index}`}>
        <Cable color={color} />
      </ContainerDraggable>
    );
  });

  return (
    <div className={styles.bar}>
      {modelList}
      {cableList}  
    </div>
  );
}

export default ToolBar;

ToolBar.propTypes = {
  setOpenCloseModal: PropTypes.func,
};
