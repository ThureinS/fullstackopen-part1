import StatisticLine from "./StatisticLine";

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
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={good + neutral + bad} />
              <StatisticLine text="average" value={calculateAvg()} />
              <StatisticLine text="positive" value={calculatePositive()} />
            </tbody>
          </table>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;
