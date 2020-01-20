import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = createStore(rootReducers, applyMiddleware(logger, thunk));
