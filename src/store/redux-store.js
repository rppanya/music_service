import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import userReducer from "./reducers/user-reducer";

let reducers = combineReducers({
  user: userReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;
