import { combineReducers } from "redux";
import { counterReducer } from "./counterreducer/counterreducer";
import { userReducer } from "./userreducer";

export const reducers = combineReducers({
  users: userReducer,
  counter: counterReducer,
});

// const store = createStore(
//   combineReducers({
//     counters: counterReducer,
//     users: userReducer,
//   })
// );

// export default store;
