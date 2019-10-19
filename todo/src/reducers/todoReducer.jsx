export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },

]



export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        item: action.payload,
        completed: false,
        id: new Date()
      }
    default:
      return state;
  }
}