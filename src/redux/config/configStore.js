import { createStore } from "redux";
import { combineReducers } from "redux";

import counter from "../modules/counter";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

const store = createStore(rootReducer);

export default store;
