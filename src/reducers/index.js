import { combineReducers } from "redux";
import { apiServiceReducer } from "./starWarsApi";
import { textFilterReducer } from "./textFilter";
import { valueFilterReducer } from './valuesFilter';

export const rootReducers = combineReducers({
  apiServiceReducer,
  textFilterReducer,
  valueFilterReducer
});
