import { useState } from "react";
import "./App.css";

// 2차원 배열로 보드 초기화
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// GameBoard 컴포넌트 정의 (정적 UI - 1단계)
const GameBoard = ({ gameTurns, handleClickBoard }) => {
  // gameTurns를 2차원 배열로 변환
  const gameState = initialGameBoard.map((row) => [...row]);

  gameTurns.forEach(({ square, player }) => {
    gameState[square.i][square.j] = player;
  });

  const onCilckBoard = (i, j) => {
    handleClickBoard(i, j);
  };

  return (
    <div className="game-board">
      {gameState.map((row, i) => (
        <div key={i}>
          <div>
            {row.map((cell, j) => (
              <div key={j}>
                <button onClick={() => onCilckBoard(i, j)}>{cell || ""}</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Player 컴포넌트 정의 (정적 UI - 1단계)
function Player({ name, symbol }) {
  return (
    <div>
      <span>
        {name} ({symbol})
      </span>
    </div>
  );
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const handleClickBoard = (i, j) => {
    setGameTurns((prevTurns) => {
      // 이미 채워진 칸 체크
      const isAlreadyFilled = prevTurns.some(
        (turn) => turn.square.i === i && turn.square.j === j
      );
      if (isAlreadyFilled) return prevTurns;

      // 현재 플레이어 계산 (prevTurns 기준)
      const currentPlayer = prevTurns.length % 2 === 0 ? "X" : "O";

      return [...prevTurns, { square: { i, j }, player: currentPlayer }];
    });
  };

  return (
    <main>
      <div id="players">
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" />
      </div>
      <GameBoard gameTurns={gameTurns} handleClickBoard={handleClickBoard} />
    </main>
  );
}

export default App;
