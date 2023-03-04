import style from "./StartPage.module.css";
import GameFiled from "../gameFiled/GameFiled";
import { useState } from "react";

const StartPage = () => {
  const [players, setPlayers] = useState({
    namePlayerX: "",
    namePlayerO: "",
    movesPlayerX: [],
    movesPlayerO: [],
    valueSquare: "true",
  });

  const changeXorO = () => {
    setPlayers({ ...players, valueSquare: !players.valueSquare });
  };
  
  return (
    <div className={style.container}>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div className={style.fieldContainer}>
        <GameFiled valueSquare={players.valueSquare} changeValue={changeXorO} />
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
            <th>{}</th>
            <th>0</th>
          </tr>
          <tr>
            <th>{}</th>
            <th>0</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StartPage;
