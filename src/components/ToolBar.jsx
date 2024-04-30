import styles from "./ToolBar.module.css";
import Model from "./Model";
import { useContext } from "react";
import PropTypes from "prop-types";
import { PassivesContext } from "../context/Contexts";
import { cables } from "../data/cables";
import { Cable } from "./Figures/Cable";
import { ContainerDraggable } from "./Containers/ContainerDraggable";

function ToolBar({ setOpenCloseModal }) {
  const networkElements = useContext(PassivesContext);

  const modelList = networkElements.map(({ id, type }) => {
    return (
      <Model
        key={`key${id}`}
        id={id}
        type={type}
        updateElementNetwork={setOpenCloseModal}
      />
    );
  });

  const cableList = cables.map(({ id, color }, index) => {
    return (
      <ContainerDraggable id={id} key={`key-${index}`}>
        <Cable color={color} enable={0} />
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
