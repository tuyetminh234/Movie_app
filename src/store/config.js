import { combineReducers, createStore } from "redux";
import { registerReducer } from "./reducers/registerReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  registerReducer: registerReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
