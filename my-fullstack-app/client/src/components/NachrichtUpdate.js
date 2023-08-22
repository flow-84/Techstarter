import React, { useState } from 'react';

function NachrichtUpdate({ setUpdate }) {
  const [nachricht, setNachricht] = useState('');

  function handleUpdate(e) {
    e.preventDefault();
    fetch('http://localhost:8080/api/nachricht/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nachricht })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          setUpdate(prev => !prev); // Trigger a re-fetch in the Nachricht component
        }
      });
  }

  return (
    <div>
      <input type="text" value={nachricht} onChange={e => setNachricht(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default NachrichtUpdate;
