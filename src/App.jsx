import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const values = [{ good: good, neutral: neutral, bad: bad }];

  const changeValue = (address) => {
    const changeValueHandler = () => {
      if (address === "Good") {
        const newGood = good + 1;
        setGood(newGood);
      } else if (address === "Neutral") {
        const newNeutral = neutral + 1;
        setNeutral(newNeutral);
      } else if (address === "Bad") {
        const newBad = bad + 1;
        setBad(newBad);
      }
    };
    return changeValueHandler;
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={changeValue("Good")} text="Good" />
      <Button onClick={changeValue("Neutral")} text="Neutral" />
      <Button onClick={changeValue("Bad")} text="bad" />
      <h1>Statistics</h1>
      <Statistics values={values} address="all" />
    </div>
  );
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const Statistics = (props) => {
  const values = props.values[0];
  const all = values.good + values.neutral + values.bad;

  const average =
    (values.good - values.bad) / (values.good + values.neutral + values.bad);

  const positive = values.good / (values.good + values.neutral + values.bad);
  if (values.good === 0 && values.neutral === 0 && values.bad === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <p>good: {values.good}</p>
        <p>neutral: {values.neutral}</p>
        <p>bad: {values.bad}</p>
        <p>all: {all}</p>
        <p>average {average}</p>
        <p>positive {positive}</p>
      </>
    );
  }
};

export default App;
