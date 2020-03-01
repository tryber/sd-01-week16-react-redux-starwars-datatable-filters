import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from '../Reducers/combineReducer';


const store = createStore(rootReducers, applyMiddleware(logger, thunk));

export default store;
