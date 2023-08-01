// src/Calculator.js
import React, { useState } from 'react';
import Converter from './Converter';

const Calculator = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    const celsiusValue = (parseFloat(e.target.value) - 32) * (5 / 9);
    setCelsius(celsiusValue.toFixed(2));
  };

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    const fahrenheitValue = (parseFloat(e.target.value) * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  return (
    <div>
      <h2>Fahrenheit / Celsius Converter</h2>
      <Converter
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        fromUnit="Fahrenheit"
        toUnit="Celsius"
      />
      <Converter
        value={celsius}
        onChange={handleCelsiusChange}
        fromUnit="Celsius"
        toUnit="Fahrenheit"
      />
    </div>
  );
};

export default Calculator;
