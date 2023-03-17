import style from "./StartPage.module.css";
import GameFiled from "../gameFiled/GameFiled";
import { useState } from "react";
import PopUp from "../popUp/PopUp";

const StartPage = () => {
  const [state, setState] = useState({
    playerX: { name: "", moves: [] },
    playerO: { name: "", moves: [] },
    valueSquare: "true",
    isShowPopUp: false,
  });

  const changeXorO = () => {
    setState({ ...state, valueSquare: !state.valueSquare });
  };

  const changeStatePopUp = () => {
    setState({...state, isShowPopUp: !state.isShowPopUp});
  }


  const isNameEmpty = () => {
    const namePlayer_1 = state.playerX.name.trim();
    const namePlayer_2 = state.playerO.name.trim();

    if (namePlayer_1 === "" || namePlayer_2 === "") {
      return true;
    }

    return false;
  };
 
  const props = {
    valueSquare: state.valueSquare,
    changeValue: changeXorO,
    isNameEmpty: isNameEmpty,
    isShowPopUp: changeStatePopUp,
  };

  return (
    <div className={style.container}>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div className={style.fieldContainer}>
        <GameFiled data={props} />
        <button className={style.btn}>Нова гра</button>
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
      <PopUp isShowPopUp={state.isShowPopUp} changeStatePopUp={changeStatePopUp}/>
    </div>
  );
};

export default StartPage;
