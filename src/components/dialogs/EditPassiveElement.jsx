import { useState } from "react";
import "./EditPassiveElement.css";
import PropTypes from "prop-types";
import { useElementStore } from "../../store/elementStore";

export function EditPassiveElement({
  networkElementId,
  setCloseModal
}) {
  const passivesState = useElementStore((state) => state.passives);
  const updatePassivesState = useElementStore((state) => state.updatePassives);

  const { name, attenuation, insertion } = passivesState.find(
    (element) => element.id === networkElementId
  );

  const [passive, setElementEditable] = useState({ attenuation, insertion });

  function handleAttenuationChange(e) {
    setElementEditable({
      ...passive,
      attenuation: e.target.value,
    });
  }

  function handleInsertionChange(e) {
    setElementEditable({
      ...passive,
      insertion: e.target.value,
    });
  }

  const saveChanges = () => {
    const passiveUpdated = passivesState.map((element) => {
      if (element.id === networkElementId) {
        return { ...element, ...passive };
      } else {
        return element;
      }
    });

    updatePassivesState(passiveUpdated);
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
          <label htmlFor="Attenuation">Atenuación:</label>
          <input
            id="Attenuation"
            type="number"
            value={passive.attenuation}
            onChange={handleAttenuationChange}
          />
        </div>
        <div>
          <label htmlFor="Insertion">Inserción:</label>
          <input
            id="Insertion"
            type="number"
            value={passive.insertion}
            onChange={handleInsertionChange}
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

EditPassiveElement.propTypes = {
  networkElementId: PropTypes.string,
  setCloseModal: PropTypes.func
};
