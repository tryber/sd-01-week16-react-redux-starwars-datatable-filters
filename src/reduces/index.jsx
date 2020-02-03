import { combineReducers } from 'redux';

import database from './database';
import filters from './filters';

const rootReducer = combineReducers({
  database,
  filters,
});

export default rootReducer;
