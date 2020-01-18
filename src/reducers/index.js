import { combineReducers } from "redux";
import { apiServiceReducer } from "./starWarsApi";
import { textFilterReducer } from "./textFilter";

export const rootReducers = combineReducers({
  apiServiceReducer,
  textFilterReducer
});
