import React, { useState } from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTasks = () => {

  }
  return (
    <div className="App">
      <h1>Todo</h1>
      <Todo />
    </div>
  );
}

export default App;
