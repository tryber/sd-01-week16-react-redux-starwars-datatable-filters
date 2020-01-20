import { combineReducers } from 'redux';
import planetsData from './PlanetsDatabase';
import filterPlanets from './FilterPlanets';

const rootReducer = combineReducers({
  planetsData,
  filterPlanets,
});

export default rootReducer;
