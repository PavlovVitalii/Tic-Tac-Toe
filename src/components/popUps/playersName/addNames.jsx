import { useState } from "react";
import style from "./names.module.css";

const AddNames = (props) => {
  const [state, setState] = useState({
    visible: false,
    firsPlayerName: "",
    secondPlayerName: "",
  });

  const TITLE_FIRST_PLAYER_NAME = "Перший гравець";
  const TITLE_SECOND_PLAYER_NAME = "Другий гравець";
  let classNameContainer = `${style["form-container"]}`;

  if (props.isShowPopUp !== state.visible) {
    setState({ ...state, visible: props.isShowPopUp });
  }

  const handleClick = () => {
    props.savePlayersNames(state.firsPlayerName, state.secondPlayerName);
    setState({ ...state, firsPlayerName: "", secondPlayerName: "" });
  };

  const handleChange = (event) => {
    if (event.target.id === "firstPlayer") {
      setState({ ...state, firsPlayerName: event.target.value });
    } else {
      setState({ ...state, secondPlayerName: event.target.value });
    }
  };

  return (
    <div
      className={
        state.visible
          ? classNameContainer
          : (classNameContainer += ` ${style.hidden}`)
      }
    >
      <div className={style.form}>
        <label htmlFor="firstPlayer">{TITLE_FIRST_PLAYER_NAME}</label>
        <input type="text" id="firstPlayer" onChange={handleChange} value={state.firsPlayerName}/>
        <label htmlFor="secondPlayer">{TITLE_SECOND_PLAYER_NAME}</label>
        <input type="text" id="secondPlayer" onChange={handleChange} value={state.secondPlayerName}/>
        <button onClick={handleClick}>Ok</button>
      </div>
    </div>
  );
};

export default AddNames;
