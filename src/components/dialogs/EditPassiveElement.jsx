import "./EditPassiveElement.css";

export function EditPassiveElement({ setCloseModal }) {

  const toggleModal = () => {
    setCloseModal(false);
  };

  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h2>Editar Elemento de Red</h2>
        <div>
          <label htmlFor="Atenuation">Atenuación:</label>
          <input id="Atenuation" type="number" />
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
