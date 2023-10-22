import { useState } from "react";
import "./App.css";

function Steps({ step, setStep }) {
  return (
    <div>
      <button
        onClick={() => {
          setStep((step) => {
            return step - 1;
          });
        }}
      >
        -
      </button>
      Step: {step}
      <button
        onClick={() => {
          setStep(step + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
function Count({ count, handleMinusCount, handlePlusCount }) {
  return (
    <div>
      <button onClick={handleMinusCount}>-</button>
      Count: {count}
      <button onClick={handlePlusCount}>+</button>
    </div>
  );
}

function Inform({ count }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  const date2 = date.toDateString();

  if (count > 0)
    return (
      <div>
        {count} days from today is {date2}
      </div>
    );
  if (count < 0)
    return (
      <div>
        {Math.abs(count)} ago was {date2}
      </div>
    );
  if (count === 0) return <div>Today is {date2}</div>;
}

function App() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);

  function handlePlusCount() {
    if (step) {
      setCount(count + step);
    }
    if (!step) {
      setCount(count + 1);
    }
  }
  function handleMinusCount() {
    if (step) {
      setCount(count - step);
    }
    if (!step) {
      setCount(count - 1);
    }
  }
  return (
    <div className="app">
      <Steps step={step} setStep={setStep} />
      <Count
        count={count}
        handleMinusCount={handleMinusCount}
        handlePlusCount={handlePlusCount}
      />
      <Inform count={count} />
    </div>
  );
}

export default App;
