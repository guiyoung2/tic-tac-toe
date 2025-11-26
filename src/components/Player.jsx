// Player 컴포넌트 정의
const Player = ({ name, symbol, isActive, onChangeName }) => {
  return (
    <div className={isActive ? "active" : ""}>
      <span className="name-container">
        <span className={isActive ? "isActive" : ""}>
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeName(symbol, e.target.value)}
          />
        </span>
        <span className="symbol">({symbol})</span>
      </span>
    </div>
  );
};

export default Player;
