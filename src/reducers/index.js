import { combineReducers } from 'redux';
import apiServiceReducer from './starWarsApi';
import textFilterReducer from './textFilter';
import valueFilterReducer from './valuesFilter';
import finalFilterReducer from './filters';

const rootReducers = combineReducers({
  apiServiceReducer,
  textFilterReducer,
  valueFilterReducer,
  finalFilterReducer,
});

export default rootReducers;
