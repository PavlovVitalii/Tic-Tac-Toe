import Square from "../square/Square";
import style from "./GameFiled.module.css";

const GameFiled = (props) => {
  const data = { ...props.data };
  const buttons = document.getElementsByTagName("button");
  const resetGameFiled = () => {
    buttons.array.forEach((element) => {
      element.value = "";
    });
  };

  return (
    <div className={style.field}>
      <Square id="1" data={data} />
      <Square id="2" data={data} />
      <Square id="3" data={data} />
      <Square id="4" data={data} />
      <Square id="5" data={data} />
      <Square id="6" data={data} />
      <Square id="7" data={data} />
      <Square id="8" data={data} />
      <Square id="9" data={data} />
    </div>
  );
};

export default GameFiled;
