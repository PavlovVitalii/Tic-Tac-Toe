import Square from "../Square/Square";
import style from "./GameFiled.module.css";

const GameFiled = () => {
  return (
    <div className={style.field}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

export default GameFiled;
