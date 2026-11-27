const Statistics = ({ good, neutral, bad }) => {
  function calculateAvg() {
    return (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
  }

  function calculatePositive() {
    return (good * 100) / (good + neutral + bad) + "%";
  }
  return (
    <div>
      <h1>statistics</h1>
      <div>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good + neutral + bad}</p>
            <p>average {calculateAvg()}</p>
            <p>positive {calculatePositive()}</p>
          </div>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;
