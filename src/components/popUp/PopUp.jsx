import style from "./PopUp.module.css";
import { useState } from "react";

const PopUp = (props) => {
  const [hidePopUp, setHidePopUP] = useState(props.isShowPopUp);
  const massage = "Для початку гри потрібно натиснути кнопку Нова гра";

  if (props.isShowPopUp !== hidePopUp) {
    setHidePopUP(props.isShowPopUp);
  }

  const handleClick = () => {
    props.changeStatePopUp();
  };

  return (
    <div
      className={`${style.pop_up_container} ${hidePopUp ? "" : `${style.not}`}`}
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

export default PopUp;
