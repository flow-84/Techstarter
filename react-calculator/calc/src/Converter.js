// src/Converter.js
import React from 'react';

const Converter = ({ value, onChange, fromUnit, toUnit }) => {
  return (
    <div>
      <input type="number" value={value} onChange={onChange} />
      <span>{fromUnit}</span> to <span>{toUnit}</span>
    </div>
  );
};

export default Converter;
