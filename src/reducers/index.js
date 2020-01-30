import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import filterName from './filterName';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
});
export default rootReducer;
