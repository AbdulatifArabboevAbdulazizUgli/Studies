import "./App.css";
import { useState } from "react";

function OverWiew() {
  const [totalBill, setTotalBill] = useState(0);
  const [yourRating, setYourRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  const total = `$${
    totalBill + (yourRating + friendRating) / 2
  } ($${totalBill} + $${(yourRating + friendRating) / 2})`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="1">How much was the bill?</label>
        <input
          id="1"
          type="number"
          placeholder="Bill value"
          onChange={(e) => {
            setTotalBill(+e.target.value);
          }}
          value={totalBill || "Bill value"}
        ></input>
      </form>
      <div>
        <label htmlFor="2">How did you like the service?</label>
        <select
          id="2"
          onChange={(e) => {
            setYourRating(+e.target.value);
          }}
          value={yourRating}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was Okay(5%)</option>
          <option value="10">It was good (10%) </option>
          <option value="20">Absolutely amzing(20%)</option>
        </select>
      </div>
      <div>
        <label htmlFor="3">How did your friend like the service?</label>
        <select
          id="3"
          onChange={(e) => {
            setFriendRating(+e.target.value);
          }}
          value={friendRating}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was Okay(5%)</option>
          <option value="10">It was good (10%) </option>
          <option value="20">Absolutely amzing(20%)</option>
        </select>
      </div>
      <h1>You pay {total} tip</h1>
      <button
        style={{ backgroundColor: "transparent" }}
        onClick={() => {
          setTotalBill(0);
          setFriendRating(0);
          setYourRating(0);
        }}
      >
        RESET
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <OverWiew />
    </div>
  );
}

export default App;
