import style from "./PopUp.module.css";
import { useState } from "react";

const Info = (props) => {
  const [showPopUp, setShowPopUp] = useState(props.isShowPopUp);
  const massage = "Для початку гри потрібно натиснути кнопку Нова гра";

  if (props.isShowPopUp !== showPopUp) {
    setShowPopUp(props.isShowPopUp);
  }

  const handleClick = () => {
    props.changeVisibilityInfo();
  };

  return (
    <div
      className={`${style["pop-up-container"]} ${
        showPopUp ? "" : `${style.hidden}`
      }`}
    >
      <div className={style.item}>
        <p>{massage}</p>
        <button className={style.btn} onClick={handleClick}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Info;
