// 승리 조건을 체크하는 함수
export const checkWinner = (gameTurns) => {
  // 여기에 로직을 작성할 예정
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  gameTurns.forEach(({ square, player }) => {
    gameBoard[square.i][square.j] = player;
  });

  // 가로 줄 체크 (반복문 사용)
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2]
    ) {
      return gameBoard[i][0];
    }
  }

  // 세로 줄 체크 (반복문 사용)
  for (let j = 0; j < 3; j++) {
    if (
      gameBoard[0][j] &&
      gameBoard[0][j] === gameBoard[1][j] &&
      gameBoard[1][j] === gameBoard[2][j]
    ) {
      return gameBoard[0][j];
    }
  }
  // 대각선 체크
  if (
    gameBoard[0][0] &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }
  if (
    gameBoard[0][2] &&
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0]
  ) {
    return gameBoard[0][2];
  }

  // 승리자가 없고 보드가 가득 찬 경우 무승부
  if (gameTurns.length === 9) {
    return "draw";
  }

  // 승리자도 없고 무승부도 아니면 게임 진행 중
  return null;
};
