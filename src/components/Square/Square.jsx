import { useState } from "react";
import style from "./Square.module.css";

const Square = (props) => {
  const [square, setSquare] = useState({ disable: false, value: "" });
  const data = { id: props.id, ...props.data };

  const handleClick = (e) => {
    console.log(data.value);
    if (data.isNameEmpty()) {
      data.changeVisibilityInfo();
      return;
    }

    // setSquare({disable: true });

    if (data.valueSquare) {
      setSquare({ disable: true, value: "X" });
      data.saveMove(e.target.id, "playerX");
    } else {
      setSquare({ disable: true, value: "O" });
      data.saveMove(e.target.id, "playerO");
    }
    data.changeValue();
  };

  return (
    <button
      className={style.square}
      onClick={handleClick}
      id={data.id}
      disabled={square.disable}
    >
      {square.value}
    </button>
  );
};

export default Square;
