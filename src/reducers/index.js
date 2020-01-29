import { combineReducers } from 'redux';
import planets from './Planets';
import filters from './Filters';

const rootReducer = combineReducers({
  planets,
  filters,
});

export default rootReducer;
