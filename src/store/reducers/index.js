import { combineReducers } from 'redux';
import data from './starWarsAPI';
import filters from './filter';
import sort from './buttonSort';

const rootReducers = combineReducers({
  data,
  filters,
  sort,
});

export default rootReducers;
