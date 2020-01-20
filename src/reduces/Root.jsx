import { combineReducers } from 'redux';
import planetsData from './PlanetsDatabase';

const rootReducer = combineReducers({
  planetsData,
});

export default rootReducer;
