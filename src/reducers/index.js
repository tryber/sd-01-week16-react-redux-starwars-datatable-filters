import { combineReducers } from 'redux';
import data from './Planets';
import filters from './Filters';
import filtersName from './FilterName';

const rootReducer = combineReducers({
  data,
  filters,
  filtersName,
});

export default rootReducer;
