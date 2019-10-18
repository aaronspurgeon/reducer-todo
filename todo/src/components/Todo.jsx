import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';

function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Todo;