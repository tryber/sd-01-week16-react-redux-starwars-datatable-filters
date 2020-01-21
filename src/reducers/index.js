import { combineReducers } from 'redux';
import planets from './Planets';
import filterName from './FilterName';

const rootReducer = combineReducers({
  planets,
  filterName,
});

export default rootReducer;
