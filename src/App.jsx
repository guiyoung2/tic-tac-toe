import { useState } from "react";
import "./App.css";
import { checkWinner } from "./util/winning";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import History from "./components/History";
import Player from "./components/Player";
import { getCurrentPlayer, isPlayerActive } from "./util/gameLogic";

const InitPlayerName = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState(InitPlayerName);
  const [history, setHistory] = useState([[]]);
  const [turnIndex, setTurnIndex] = useState(0);
  const currentTurns = history[turnIndex] || [];
  const winner = checkWinner(currentTurns);

  const onChangeName = (symbol, name) => {
    setPlayerName((prev) => ({
      ...prev,
      [symbol]: name,
    }));
  };

  const handleJumpTo = (index) => {
    setTurnIndex(index);
    setGameTurns(history[index]);
  };

  const handleClickBoard = (i, j) => {
    if (winner) return;

    const newTurns = currentTurns.slice(0, turnIndex + 1);
    // 이미 채워진 칸 체크
    const isAlreadyFilled = newTurns.some(
      (turn) => turn.square.i === i && turn.square.j === j
    );
    if (isAlreadyFilled) return;

    // 다음 턴의 플레이어 계산
    const nextPlayer = getCurrentPlayer(newTurns);

    const updatedTurns = [
      ...newTurns,
      { square: { i, j }, player: nextPlayer },
    ];

    setHistory((prevHistory) => {
      const newHistory = prevHistory.slice(0, turnIndex + 1);
      return [...newHistory, updatedTurns];
    });
    setTurnIndex((prevIndex) => prevIndex + 1);
    setGameTurns(updatedTurns);
  };

  const currentPlayer = getCurrentPlayer(currentTurns);
  const isXActive = isPlayerActive("X", currentPlayer, winner);
  const isOActive = isPlayerActive("O", currentPlayer, winner);

  const handleReset = () => {
    setGameTurns([]);
    setHistory([[]]);
    setTurnIndex(0);
  };

  return (
    <main>
      <div id="players" className={currentTurns.length > 0 ? "active" : ""}>
        <Player
          onChangeName={onChangeName}
          name={playerName.X}
          symbol="X"
          isActive={isXActive}
        />
        <Player
          onChangeName={onChangeName}
          name={playerName.O}
          symbol="O"
          isActive={isOActive}
        />
      </div>
      <GameBoard gameTurns={currentTurns} handleClickBoard={handleClickBoard} />
      <div className="result-container">
        {winner === "draw" && <div>Draw!</div>}
        {winner && winner !== "draw" && <div>Winner: {winner}</div>}
      </div>
      <button onClick={handleReset}>Reset</button>
      <Log gameTurns={currentTurns} />
      <History
        history={history}
        turnIndex={turnIndex}
        onJumpTo={handleJumpTo}
      />
    </main>
  );
}

export default App;
