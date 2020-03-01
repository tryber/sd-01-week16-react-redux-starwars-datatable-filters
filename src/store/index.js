import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
  data: [],
};

const FETCH_PLANETS = 'FETCH_PLANETS';

function planetFetcher(state = INITIAL_STATE, { type, planets }) {
  switch (type) {
    case FETCH_PLANETS:
      return { data: [...planets] };
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(planetFetcher, composeEnhancers(applyMiddleware(thunk)));

export default store;
