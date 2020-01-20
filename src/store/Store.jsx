import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer  from '../reduces/Root';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
