import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import userReducer from "./reducers/userReducer";
import songsReducer from "./reducers/songsReducer";
import followReducer from "./reducers/followReducer";

let reducers = combineReducers({
  user: userReducer,
  songs: songsReducer,
  follow: followReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;
