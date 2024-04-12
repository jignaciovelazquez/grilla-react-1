import styles from "./ToolBar.module.css";
import Model from "./Model";
import { useContext } from "react";
import { PassivesContext } from "../context/Contexts";
import { cables } from "../data/cables";
import { Cable } from "./Figures/Cable";


function ToolBar() {
  
  const networkElements = useContext(PassivesContext);
  const modelList = networkElements.map(({ id, type }) => {
    return <Model key={`key${id}`} id={id} type={type} />;
  });

  console.log(cables);

  const cableList = cables.map(({id, color}) => {
    return <Cable id={id} color={color} />
  });

  return (
    <>
      <div className={styles.bar}>
        {modelList}
        {cableList}  
      </div>
    </>
  );
}

export default ToolBar;
