// 현재 플레이어 계산
export const getCurrentPlayer = (turns) => {
  return turns.length % 2 === 0 ? "X" : "O";
};

// 플레이어가 활성 상태인지 체크
export const isPlayerActive = (player, currentPlayer, winner) => {
  return !winner && currentPlayer === player;
};
