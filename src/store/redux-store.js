import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import userReducer from "./reducers/userReducer";
import songsReducer from "./reducers/songsReducer";

let reducers = combineReducers({
  user: userReducer,
  songs: songsReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;
