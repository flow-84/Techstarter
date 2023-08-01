// src/App.js
import React from 'react';
import './App.css';
import TodoList from './ToDoList'; // Hier wird die TodoList-Komponente importiert
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div className="App">
      <CurrencyConverter />
      <TodoList /> {/* Hier sollte die TodoList-Komponente verwendet werden */}
    </div>
  );
}

export default App;
