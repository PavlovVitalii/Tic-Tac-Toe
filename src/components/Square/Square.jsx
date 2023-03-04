import { useState } from "react";
import style from "./Square.module.css";

const Square = (props) => {
  const [square, setSquare] = useState({ disable: false, value: "" });

  const handleClick = (event) => {
    setSquare({ ...square, disable: true });

    if (props.valueSquare) {
      setSquare({ disable: true, value: "X" });
    } else {
      setSquare({ disable: true, value: "O" });
    }
    props.changeValue();
  };

  return (
    <button
      className={style.square}
      onClick={handleClick}
      id={props.id}
      disabled={square.disable}
    >
      {square.value}
    </button>
  );
};

export default Square;
