import { combineReducers } from 'redux';
import planets from './Planets';

const rootReducer = combineReducers({
  planets,
});

export default rootReducer;
