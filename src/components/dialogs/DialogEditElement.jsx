import "./DialogEditElement.css";

export function DialogEditElement({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Editar Elemento de Red</h1>
        </div>
        <div className="body">
          <div className="">
            
          </div>
          <div>
            <label htmlFor="">F_hight:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">F_low:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">R_hight:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">R_low:</label>
            <input type="text" />
          </div>
        </div>
        <div className="footer">
          <button
            id="cancelBtn"
            onClick={() => {
              setOpenModal(false);
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
