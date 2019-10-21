import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';
import TodoList from './TodoList';

function Todo() {
  const [newTask, setNewTask] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleChange = e => {
    setNewTask(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: newTask});
    setNewTask('');
  }

  // const handleComplete = e => {
  //   e.preventDefault();
  //   dispatch({ type: 'TOGGLE_COMPLETED'})
  // }

  return (
    <div>
      {state.todoTasks.map((task, index) => (
        <TodoList task={task} key={index} dispatch={dispatch} />
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='newTask'
          placeholder='Add a task'
          value={newTask}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Todo;