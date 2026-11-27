import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGood() {
    setGood(good + 1);
  }

  function handleNeutral() {
    setNeutral(neutral + 1);
  }

  function handleBad() {
    setBad(bad + 1);
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button name="good" onClick={handleGood} />
        <Button name="neutral" onClick={handleNeutral} />
        <Button name="bad" onClick={handleBad} />
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
