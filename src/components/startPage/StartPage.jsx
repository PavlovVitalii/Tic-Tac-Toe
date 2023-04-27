import style from "./StartPage.module.css";
import GameFiled from "../gameFiled/GameFiled";
import { useState } from "react";
import PopUp from "../popUps/Info/PopUp";
import NamesPopUp from "../popUps/playersName/addNames";

const StartPage = () => {
  const [state, setState] = useState({
    playerX: { name: "", moves: [] },
    playerO: { name: "", moves: [] },
    valueSquare: "true",
    isShowInfo: false,
    isShowForm: false,
  });

  const changeXorO = () => {
    setState({ ...state, valueSquare: !state.valueSquare });
  };

  const changeVisibilityInfo = () => {
    setState({ ...state, isShowInfo: !state.isShowInfo });
  };

  const changeVisibilityForm = () => {
    setState({ ...state, isShowForm: !state.isShowForm });
  };


  const isNameEmpty = () => {
    const namePlayer_1 = state.playerX.name.trim();
    const namePlayer_2 = state.playerO.name.trim();

    return namePlayer_1 === "" || namePlayer_2 === "";
  };

  const props = {
    valueSquare: state.valueSquare,
    changeValue: changeXorO,
    isNameEmpty: isNameEmpty,
    changeVisibilityInfo: changeVisibilityInfo,
  };

  return (
    <div className={style.container}>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div className={style["field-container"]}>
        <GameFiled data={props} />
        <button className={style.btn} onClick={changeVisibilityForm}>Нова гра</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Ім'я ігрока</th>
            <th>Кількість вигршів</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{state.playerX.name}</th>
            <th>{0}</th>
          </tr>
          <tr>
            <th>{state.playerO.name}</th>
            <th>{0}</th>
          </tr>
        </tbody>
      </table>
      <PopUp
        isShowPopUp={state.isShowInfo}
        changeVisibilityInfo={changeVisibilityInfo}
      />
      <NamesPopUp isShowPopUp={state.isShowForm} changeVisibilityForm={changeVisibilityForm}></NamesPopUp>
    </div>
  );
};

export default StartPage;
