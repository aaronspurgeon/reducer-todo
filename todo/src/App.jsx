import React, { useState } from 'react';
import Todo from './components/Todo';
import './App.scss';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTasks = () => {

  }
  return (
    <div style={{textAlign: 'center'}} className="App">
      <h1>Tasks you need to do ASAP!</h1>
        <Todo />
    </div>
  );
}

export default App;
