import { combineReducers } from 'redux';
import data from './starWarsAPI';

const rootReducers = combineReducers({
  data,
});

export default rootReducers;
