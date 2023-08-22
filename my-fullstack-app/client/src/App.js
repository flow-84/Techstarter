import React, { useState } from 'react';
import Nachricht from './components/Nachricht';
import NachrichtUpdate from './components/NachrichtUpdate';

function App() {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <Nachricht onUpdate={update} />
      <NachrichtUpdate setUpdate={setUpdate} />
    </div>
  );
}

export default App;
