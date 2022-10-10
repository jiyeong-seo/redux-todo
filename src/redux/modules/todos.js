// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
const WORK_TODO = "WORK_TODO";

// Action Counter
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const doneTodo = (payload) => {
  return { type: DONE_TODO, payload };
};

// Initial Value
const initialState = [];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [...action.payload];
    case DONE_TODO:
      return [...action.payload];
    case WORK_TODO:
      return [...action.payload];
    default:
      return state;
  }
};

export default todos;
