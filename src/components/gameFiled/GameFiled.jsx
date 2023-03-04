import Square from "../Square/Square";
import style from "./GameFiled.module.css";

const GameFiled = (props) => {
    
  return (
    <div className={style.field}>
      <Square id = "2" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
      <Square id = "1" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
      <Square id = "3" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
      <Square id = "4" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
      <Square id = "5" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
      <Square id = "6" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
      <Square id = "7" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
      <Square id = "8" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
      <Square id = "9" valueSquare={props.valueSquare} changeValue={props.changeValue}/>
    </div>
  );
};

export default GameFiled;
