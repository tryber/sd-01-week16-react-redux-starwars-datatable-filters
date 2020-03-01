import { combineReducers } from 'redux';

import allPlanetWar from './allPlanetWar';
import filterName from './filterName';
import filtersForm from './filtersForm';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
  filtersForm,
});

export default rootReducer;
