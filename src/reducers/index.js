import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import filterNumber from './reducerNumberFilters';
import filterName from './filterName';
import filter from './reducerDropDonw';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
  filter,
  filterNumber,
});
export default rootReducer;
