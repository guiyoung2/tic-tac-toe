// 게임 로그 컴포넌트
const Log = ({ gameTurns }) => {
  return (
    <div className="log-container">
      <h3>Log</h3>
      <ol id="log">
        {gameTurns.map(({ square, player }, index) => (
          <li key={index}>
            {player} selected {square.i},{square.j}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Log;
