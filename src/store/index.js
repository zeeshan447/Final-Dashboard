import { combineReducers } from "redux";
import { counterReducer } from "./counterreducer/counterreducer";
import { userReducer } from "./userreducer";
import { userDetailReducer } from "./userDetailReducer";

export const reducers = combineReducers({
  users: userReducer,
  counter: counterReducer,
  userDetails: userDetailReducer,
});

// const store = createStore(
//   combineReducers({
//     counters: counterReducer,
//     users: userReducer,
//   })
// );

// export default store;
