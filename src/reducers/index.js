import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import filters from './reducerNumberFilters';
import filterName from './filterName';
import filtersOrder from './filtersOrder';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
  filters,
  filtersOrder,
});
export default rootReducer;
