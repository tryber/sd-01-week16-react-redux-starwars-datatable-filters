import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import updateInput from './updateInput';

const rootReducer = combineReducers({
  allPlanetWar,
  updateInput,
});
export default rootReducer;
