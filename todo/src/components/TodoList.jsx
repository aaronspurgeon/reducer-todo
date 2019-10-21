import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';

const TodoList = ({ task, dispatch }) => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    console.log(task)
    return (
        <div onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: task})}>
            {/* <h2>{task.item}</h2> */}
            {task.completed ? <h2 className='completed'>{task.item}</h2> : <h2>{task.item}</h2>}
        </div>
    )
}

export default TodoList;