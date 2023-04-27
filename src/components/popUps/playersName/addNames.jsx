import { useState } from "react";
import style from "./names.module.css";

const AddNames = (props) => {
  const [visibility, setVisibility] = useState(props.isShowPopUp);
  console.log(visibility);

  const FIRST_PLAYER_NAME = "Перший гравець";
  const SECOND_PLAYER_NAME = "Другий гравець";
  let classNameContainer = `${style["form-container"]}`;

  if (props.isShowPopUp !== visibility) {
    setVisibility(props.isShowPopUp);
  }

  const handleClick = () => {
    setVisibility(props.changeVisibilityForm());
  };

  return (
    <div
      className={
        visibility
          ? classNameContainer
          : (classNameContainer += ` ${style.hidden}`)
      }
    >
      <div className={style.form}>
        <label htmlFor="firstPlayer">{FIRST_PLAYER_NAME}</label>
        <input type="text" id="firstPlayer" />
        <label htmlFor="secondPlayer">{SECOND_PLAYER_NAME}</label>
        <input type="text" id="secondPlayer" />
        <button onClick={handleClick}>Ok</button>
      </div>
    </div>
  );
};

export default AddNames;
