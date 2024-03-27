import "./EditActiveElement.css";

export function EditActiveElement({ setCloseModal }) {

  const toggleModal = () => {
    setCloseModal(false);
  };

  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h2>Editar Elemento de Red</h2>
        <div>
          <label htmlFor="F_hight">F_hight:</label>
          <input id="F_hight" type="number" />
        </div>
        <div>
          <label htmlFor="F_low">F_low:</label>
          <input id="F_low" type="number" />
        </div>
        <div>
          <label htmlFor="R_hight">R_hight:</label>
          <input id="R_hight" type="number" />
        </div>
        <div>
          <label htmlFor="R_low">R_low:</label>
          <input id="R_hight" type="number" />
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
