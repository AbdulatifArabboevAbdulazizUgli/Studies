// `https://api.frankfurter.app/latest?amount=100&frpm=EUR&to=USD`
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [inputAmount, setInputAmount] = useState("");
  const [changedCurrency, setChangedCurrency] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("USD");

  function getAmount(e) {
    setInputAmount(e.target.value);
  }
  function getCurrFrom(e) {
    setCurrencyFrom(e.target.value);
  }
  function getCurrTo(e) {
    setCurrencyTo(e.target.value);
  }

  useEffect(() => {
    async function getFetch() {
      console.log({ currencyFrom: currencyFrom, currencyTo: currencyTo });
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${inputAmount}&from=${currencyFrom}&to=${currencyTo}`
      );
      const data = await res.json();

      setChangedCurrency(data.rates[currencyTo]);
      console.log(data);
    }
    getFetch();
  }, [inputAmount]);

  return (
    <div>
      <input type="text" onChange={getAmount}></input>
      <select value={currencyFrom} onChange={getCurrFrom}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currencyTo} onChange={getCurrTo}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {inputAmount} ,{changedCurrency}
      </p>
    </div>
  );
}

export default App;
