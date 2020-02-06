import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import filters from './reducerNumberFilters';
import filterName from './filterName';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
  filters,
});
export default rootReducer;
