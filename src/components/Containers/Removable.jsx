import { container, element } from "./Removable.module.css";
import PropTypes from "prop-types";
import { IconTrash } from "../UI/IconTrash";

export function Removable({ id, index, children, removeElement }) {
  const deleteItem = () => {
    const confirmation = confirm(
      "¿Estas seguro que quieres elimiar el elemento?"
    );
    if (confirmation) {
      console.log("posicion", index);
      removeElement(index);
    }
  };

  return (
    <div className={container} onClick={deleteItem}>
      <div className={element}>
        {children}
        <span>{id}</span> {/* donde se dibuja este spam? */}
      </div>
      <div className={element}>
        <IconTrash />
      </div>
    </div>
  );
}

Removable.propTypes = {
  children: PropTypes.element,
  id: PropTypes.string,
  index: PropTypes.number,
  removeElement: PropTypes.func,
};
