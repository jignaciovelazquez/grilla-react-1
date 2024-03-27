import { useContext, useState } from "react";
import { PassivesContext } from "../../context/Contexts";
import "./EditActiveElement.css";
import PropTypes from "prop-types";

export function EditActiveElement({ id, setCloseModal }) {

  const networkElements = useContext(PassivesContext);

  const element = networkElements.find((element) => element.id === id);

  const [elementSelected, updateElementSelected] = useState(element);

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
          <label htmlFor="F_hight">F_hight:</label>
          <input id="F_hight" type="number" value={elementSelected.F_hight} />
        </div>
        <div>
          <label htmlFor="F_low">F_low:</label>
          <input id="F_low" type="number" value={elementSelected.F_low} />
        </div>
        <div>
          <label htmlFor="R_hight">R_hight:</label>
          <input id="R_hight" type="number" value={elementSelected.R_hight} />
        </div>
        <div>
          <label htmlFor="R_low">R_low:</label>
          <input id="R_hight" type="number" value={elementSelected.R_low} />
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

EditActiveElement.propTypes = {
  id: PropTypes.string,
  setCloseModal: PropTypes.func,
};