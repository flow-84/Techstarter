// src/CurrencyConverter.js
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [conversionRate, setConversionRate] = useState(1);
  const [result, setResult] = useState('');

  const currencies = {
    USD: { name: 'US Dollar', rate: 1 },
    EUR: { name: 'Euro', rate: 0.85 },
    GBP: { name: 'British Pound', rate: 0.72 },
    JPY: { name: 'Japanese Yen', rate: 110.45 },
    // Add more currencies here as needed
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setCurrency(selectedCurrency);
    setConversionRate(currencies[selectedCurrency].rate);
  };

  const handleCalculate = () => {
    const calculatedAmount = parseFloat(amount) * conversionRate;
    setResult(calculatedAmount.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Currency:</label>
        <select value={currency} onChange={handleCurrencyChange}>
          {Object.keys(currencies).map((currencyCode) => (
            <option key={currencyCode} value={currencyCode}>
              {currencies[currencyCode].name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result && <div>Result: {result}</div>}
    </div>
  );
};

export default CurrencyConverter;