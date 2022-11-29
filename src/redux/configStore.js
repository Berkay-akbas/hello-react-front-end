/* eslint-disable */
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { greetingsReducer } from "./action_reducer";

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
