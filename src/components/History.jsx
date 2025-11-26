const History = ({ history, turnIndex, onJumpTo }) => {
  return (
    <div className="history-container">
      <h3>Move History</h3>
      <ol>
        {history.map((turns, index) => {
          // index === 0은 Reset 버튼과 중복이므로 제외
          if (index === 0) return null;

          return (
            <li key={index}>
              <button
                onClick={() => onJumpTo(index)}
                className={index === turnIndex ? "active" : ""}
              >
                {`Go to move #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default History;
