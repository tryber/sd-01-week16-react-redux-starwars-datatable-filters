import { combineReducers } from 'redux';

import allPlanetWar from './allPlanetWar';
import filterName from './filterName';
import filtersForm from './filtersForm';
import orderTable from './orderTable';

const rootReducer = combineReducers({
  allPlanetWar,
  filterName,
  filtersForm,
  orderTable,
});

export default rootReducer;
