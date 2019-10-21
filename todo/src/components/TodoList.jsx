import React, { useReducer } from 'react';
import '../App.scss';

const TodoList = ({ task, dispatch }) => {
    
    return (
        <div onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: task})} className='item'>
            {task.completed ? <h2 className='completed'>{task.item}</h2> : <h2 className=''>{task.item}</h2>}
        </div>
    )
}

export default TodoList;