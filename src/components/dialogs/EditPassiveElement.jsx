import "./EditPassiveElement.css";
import PropTypes from "prop-types";

export function EditPassiveElement({ id, setCloseModal }) {
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
        <div>
          <label htmlFor="Attenuation">Atenuación:</label>
          <input id="Attenuation" type="number" />
        </div>
        <div>
          <label htmlFor="Insertion">Inserción:</label>
          <input id="Insertion" type="number" />
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
          <button>Guardar</button>
        </div>
      </div>
    </div>
  );
}

EditPassiveElement.propTypes = {
  id: PropTypes.string,
  setCloseModal: PropTypes.func,
};
