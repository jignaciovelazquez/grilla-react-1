import style from "./Container.module.css";

export function Container({ id, children }) {
  return (
    <div className={style.container}>
      {children}
      <span>{id}</span>
    </div>
  );
}
