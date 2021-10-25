import { combineReducers } from "redux";
import { counterReducer } from "./counterreducer/counterreducer";
import { userReducer } from "./userreducer";
import { userDetailReducer } from "./userDetailReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { addCandidateReducer } from "./addcandidatereducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users", "counter", "userDetails"],
  stateReconciler: autoMergeLevel2,
};

const reducers = combineReducers({
  users: userReducer,
  counter: counterReducer,
  userDetails: userDetailReducer,
  addCandidates: addCandidateReducer,
});

export default persistReducer(persistConfig, reducers);

// const store = createStore(
//   combineReducers({
//     counters: counterReducer,
//     users: userReducer,
//   })
// );

// export default store;
