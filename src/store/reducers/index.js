import { combineReducers } from 'redux';
import data from './starWarsAPI';
import filterName from './filterName';

const rootReducers = combineReducers({
  data,
  filterName,
});

export default rootReducers;
