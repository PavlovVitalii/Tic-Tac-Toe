import { useState } from "react";
import style from "./Square.module.css";

const Square = (props) => {
  const [square, setSquare] = useState({ disable: false, value: "" });

  const data = { id: props.id, ...props.data };
  const handleClick = () => {
    if (data.isNameEmpty()) {
     data.changeVisibilityInfo();
      return;
    }

    setSquare({ ...square, disable: true });

    if (data.valueSquare) {
      setSquare({ disable: true, value: "X" });
    } else {
      setSquare({ disable: true, value: "O" });
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
