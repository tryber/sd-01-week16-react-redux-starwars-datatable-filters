import { combineReducers } from 'redux';
import allPlanetWar from './allPlanetWar';
import filterFilme from './filterFilme';

const rootReducer = combineReducers({
  allPlanetWar,
  filterFilme,
});

export default rootReducer;
