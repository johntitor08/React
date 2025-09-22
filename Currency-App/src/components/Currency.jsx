import "../css/Currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();
    const rate = data.rates[toCurrency];

    const numericAmount = parseFloat(amount) || 0; // convert to number, default 0
    setResult((numericAmount * rate).toFixed(2));
  };

  return (
    <div className="currency-div">
      <div className="currency-header">
        <h3>Currency Converter</h3>
      </div>
      <div>
        <input
          value={amount || ""}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          value={fromCurrency || "USD"}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight className="arrow-icon" />
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input value={result || ""} readOnly type="number" className="result" />
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">
          Convert
        </button>
      </div>
    </div>
  );
}

export default Currency;
