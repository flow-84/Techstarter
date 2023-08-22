import React, { useState, useEffect } from 'react';

function Nachricht({ onUpdate }) {
  const [nachricht, setNachricht] = useState('');
  useEffect(() => {
    fetch('http://localhost:8080/api/nachricht')
      .then(response => response.json())
      .then(json => setNachricht(json.nachricht));
  }, [onUpdate]);

  return (
    <div>
      <h1>{nachricht}</h1>
    </div>
  );
}

export default Nachricht;
