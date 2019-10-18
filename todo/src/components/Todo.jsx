import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';
import TodoList from './TodoList';

function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, 'hi')
    return (
        <div>
            {state.map((task, index) => (
                <TodoList task={task} key={index} />
            ))}
        </div>
    )
}

export default Todo;