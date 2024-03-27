import { useContext, useState } from "react";
import "./EditPassiveElement.css";
import PropTypes from "prop-types";
import { PassivesContext } from "../../context/Contexts";

export function EditPassiveElement({ id, setCloseModal }) {

  const networkElements = useContext(PassivesContext);

  const findElement = networkElements.find((element) => element.id === id);

  const [elementSelected, updateElementSelected] = useState(findElement);

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
        <h3>{elementSelected.name}</h3>
        <div>
          <label htmlFor="Attenuation">Atenuación:</label>
          <input id="Attenuation" type="number" value={elementSelected.atenuacion} />
        </div>
        <div>
          <label htmlFor="Insertion">Inserción:</label>
          <input id="Insertion" type="number" value={elementSelected.insercion} />
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
