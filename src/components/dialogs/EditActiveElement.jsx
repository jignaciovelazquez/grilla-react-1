import { useContext, useState } from "react";
import "./EditActiveElement.css";
import PropTypes from "prop-types";
import { PassivesContext } from "../../context/Contexts";

export function EditActiveElement({
  networkElementId,
  setCloseModal,
  updateActiveSelected,
}) {
  const networkElements = useContext(PassivesContext);

  const { name, F_hight, F_low, R_hight, R_low } = networkElements.find(
    (element) => element.id === networkElementId
  );

  const [active, setElementEditable] = useState({
    F_hight,
    F_low,
    R_hight,
    R_low,
  });

  function handleFHightChange(e) {
    setElementEditable({
      ...active,
      F_hight: e.target.value,
    });
  }

  function handleFLowChange(e) {
    setElementEditable({
      ...active,
      F_low: e.target.value,
    });
  }

  function handleRHightChange(e) {
    setElementEditable({
      ...active,
      R_hight: e.target.value,
    });
  }

  function handleRLowChange(e) {
    setElementEditable({
      ...active,
      R_low: e.target.value,
    });
  }

  const saveChanges = () => {
    const contextMutated = networkElements.map((element) => {
      if (element.id === networkElementId) {
        return { ...element, ...active };
      } else {
        return element;
      }
    });

    updateActiveSelected(contextMutated);
    setCloseModal(false);
  };

  return (
    <div className="modal">
      <div
        onClick={() => {
          setCloseModal(false);
        }}
        className="overlay"></div>
      <div className="modal-content">
        <h2>Editar Elemento de Red</h2>
        <h3>{name}</h3>
        <div>
          <label htmlFor="F_hight">F_hight:</label>
          <input
            id="F_hight"
            type="number"
            value={active.F_hight}
            onChange={handleFHightChange}
          />
        </div>
        <div>
          <label htmlFor="F_low">F_low:</label>
          <input
            id="F_low"
            type="number"
            value={active.F_low}
            onChange={handleFLowChange}
          />
        </div>
        <div>
          <label htmlFor="R_hight">R_hight:</label>
          <input
            id="R_hight"
            type="number"
            value={active.R_hight}
            onChange={handleRHightChange}
          />
        </div>
        <div>
          <label htmlFor="R_low">R_low:</label>
          <input
            id="R_hight"
            type="number"
            value={active.R_low}
            onChange={handleRLowChange}
          />
        </div>
        <div className="footer">
          <button
            id="cancelBtn"
            onClick={() => {
              setCloseModal(false);
            }}>
            Cancelar
          </button>
          <button onClick={saveChanges}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

EditActiveElement.propTypes = {
  networkElementId: PropTypes.string,
  setCloseModal: PropTypes.func,
  updateActiveSelected: PropTypes.func,
};
