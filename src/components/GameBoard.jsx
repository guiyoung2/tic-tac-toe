// 2차원 배열로 보드 초기화
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// GameBoard 컴포넌트 정의
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
              <div className="board-cell" key={j}>
                <button onClick={() => onCilckBoard(i, j)}>{cell || ""}</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
