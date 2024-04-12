import style from "./Cable.module.css";
import CableLogo from "./cable-logo.svg";

export function Cable({ id, color }) {
  return (
    <div className={style.container}>
      <img src={CableLogo} alt="cable" height={25} width={25} />
      <span>{id}</span>
    </div>
  );
}
