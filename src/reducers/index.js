import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import filterName from './filterName';
import filter from './reducerDropDonw';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
  filter,
});
export default rootReducer;
