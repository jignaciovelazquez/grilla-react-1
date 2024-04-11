import { useContext, useState } from "react";
import "./EditPassiveElement.css";
import PropTypes from "prop-types";
import { PassivesContext } from "../../context/Contexts";

export function EditPassiveElement({
  networkElementId,
  setCloseModal,
  updatePassiveSelected,
}) {
  const networkElements = useContext(PassivesContext);

  const elementSelected = networkElements.find(
    (element) => element.id === networkElementId
  );

  const [elementEditable, setElementEditable] = useState(elementSelected);

  function handleAttenuationChange(e) {
    setElementEditable({
      ...elementEditable,
      attenuation: e.target.value,
    });
  }

  function handleInsertionChange(e) {
    setElementEditable({
      ...elementEditable,
      insertion: e.target.value,
    });
  }

  const saveChanges = () => {
    const passiveUpdated = networkElements.map((element) => {
      if (element.id === networkElementId) {
        return elementEditable;
      } else {
        return element;
      }
    });

    updatePassiveSelected(passiveUpdated);
    setCloseModal(false);
  };

  return (
    <div className="modal">
      <div
        onClick={() => {
          setCloseModal(false);
        }}
        className="overlay"
      ></div>
      <div className="modal-content">
        <h2>Editar Elemento de Red</h2>
        <h3>{elementEditable.name}</h3>
        <div>
          <label htmlFor="Attenuation">Atenuación:</label>
          <input
            id="Attenuation"
            type="number"
            value={elementEditable.attenuation}
            onChange={handleAttenuationChange}
          />
        </div>
        <div>
          <label htmlFor="Insertion">Inserción:</label>
          <input
            id="Insertion"
            type="number"
            value={elementEditable.insertion}
            onChange={handleInsertionChange}
          />
        </div>
        <div className="footer">
          <button
            id="cancelBtn"
            onClick={() => {
              setCloseModal(false);
            }}
          >
            Cancelar
          </button>
          <button onClick={saveChanges}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

EditPassiveElement.propTypes = {
  networkElementId: PropTypes.string,
  setCloseModal: PropTypes.func,
  updatePassiveSelected: PropTypes.func,
};
