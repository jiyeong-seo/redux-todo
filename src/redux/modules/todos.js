// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";

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
      const deleteTodos = [
        ...state.filter((item) => item.id !== action.payload),
      ];
      return deleteTodos;
    case DONE_TODO:
      const todos = [
        ...state.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      ];
      return todos;
    default:
      return state;
  }
};

export default todos;
