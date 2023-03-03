import style from "./StartPage.module.css";
import GameFiled from "../gameFiled/GameFiled";

const FIRST_PLAYER = "Player 1";
const SECOND_PLAYER = "Player 2";

const StartPage = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div className={style.fieldContainer}>
        <GameFiled />
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
            <th>{FIRST_PLAYER}</th>
            <th>0</th>
          </tr>
          <tr>
            <th>{SECOND_PLAYER}</th>
            <th>0</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StartPage;
