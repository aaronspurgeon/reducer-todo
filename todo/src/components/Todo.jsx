import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';
import TodoList from './TodoList';
import '../App.scss'

function Todo() {
  const [newTask, setNewTask] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    setNewTask(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setNewTask('');
  }

  const handleComplete = e => {
    e.preventDefault();
    dispatch({ type: 'REMOVE_COMPLETED' })
  }

  return (
    <div>
      <div className='tasks'>
        {state.todoTasks.map((task, index) => (
          <TodoList task={task} key={index} dispatch={dispatch} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className='todoForm'>
        <input
          type='text'
          name='newTask'
          placeholder='Add a task'
          value={newTask}
          onChange={handleChange}
          className='todoInput'
        />
        <button type='submit' className='addBtn'>Add</button>
      </form>
      <button onClick={handleComplete} className='deleteBtn'>Delete finished tasks</button>
    </div>

  )
}

export default Todo;