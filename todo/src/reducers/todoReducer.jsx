export const initialState = {
  todoTasks: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 38929875891
    },
    {
      item: 'Learn about react',
      completed: false,
      id: 38929875892
    },
    {
      item: 'Learn about javascript',
      completed: false,
      id: 38929875893
    },
    {
      item: 'Learn about life',
      completed: false,
      id: 38929875894
    },
  ]
}






export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state, todoTasks: [...state.todoTasks,
        {
          item: action.payload,
          completed: false,
          id: new Date()
        }
       ]
      }
    default:
      return state;
  }
}