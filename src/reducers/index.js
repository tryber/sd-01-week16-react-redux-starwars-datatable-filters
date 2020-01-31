import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import filterName from './filterName';
import filterOfDropPlus from './reducerDropDonw';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
  filterOfDropPlus,
});
export default rootReducer;
