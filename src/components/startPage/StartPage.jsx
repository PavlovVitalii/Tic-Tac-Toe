import style from "./StartPage.module.css";
import GameFiled from "../gameFiled/GameFiled";
import { useState } from "react";
import PopUp from "../popUps/Info/PopUp";
import NamesPopUp from "../popUps/playersName/addNames";

const StartPage = () => {

  const [valueSquare, setValueSquare] = useState({
    isX: "true",
  });

  const [visibilityPopUps, setVisibilityPopUps] = useState({
    isShowInfo: false,
    isShowForm: false,
  });

  const [players, setPlayers] = useState({
    playerX: { name: "", moves: [], winCounter: 0 },
    playerO: { name: "", moves: [], winCounter: 0 },
  });

  const changePlayer = () => {
    setValueSquare({ ...valueSquare, isX: !valueSquare.isX });
  };

  const changeVisibilityInfo = () => {
    setVisibilityPopUps({
      ...visibilityPopUps,
      isShowInfo: !visibilityPopUps.isShowInfo,
    });
  };

  const changeVisibilityForm = () => {
    setVisibilityPopUps({
      ...visibilityPopUps,
      isShowForm: !visibilityPopUps.isShowForm,
    });
  };

  const isNameEmpty = () => {
    const namePlayer_1 = players.playerX.name.trim();
    const namePlayer_2 = players.playerO.name.trim();

    return namePlayer_1 === "" || namePlayer_2 === "";
  };

  const savePlayersNames = (firstPlayer = "", secondPlayer = "") => {
    setPlayers({
      ...players,
      playerX: { ...players, name: firstPlayer },
      playerO: { ...players, name: secondPlayer },
    });
    
    setVisibilityPopUps({ PisShowForm: !valueSquare.isShowForm });
  };

  const props = {
    valueSquare: valueSquare.isX,
    changeValue: changePlayer,
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
        <button className={style.btn} onClick={changeVisibilityForm}>
          Нова гра
        </button>
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
            <th>{players.playerX.name}</th>
            <th>{0}</th>
          </tr>
          <tr>
            <th>{players.playerO.name}</th>
            <th>{0}</th>
          </tr>
        </tbody>
      </table>
      <PopUp
        isShowPopUp={visibilityPopUps.isShowInfo}
        changeVisibilityInfo={changeVisibilityInfo}
      />
      <NamesPopUp
        isShowPopUp={visibilityPopUps.isShowForm}
        changeVisibilityForm={changeVisibilityForm}
        savePlayersNames={savePlayersNames}
      ></NamesPopUp>
    </div>
  );
};

export default StartPage;
