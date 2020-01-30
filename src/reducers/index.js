import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import filterName from './filterName';
import filterOfDropDown from './filterDropDonw';
import filterOfDropPlus from './filterDropPlus';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
  filterOfDropDown,
  filterOfDropPlus,
});
export default rootReducer;
