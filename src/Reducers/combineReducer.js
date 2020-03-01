import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import filters from './filters';
import sort from './orderReducer';


const rootReducers = combineReducers({ dataReducer, filters, sort });

export default rootReducers;
