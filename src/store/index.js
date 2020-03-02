import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
  data: [],
  isFiltered: false,
  filters: {},
};

const FETCH_PLANETS = 'FETCH_PLANETS';
const FILTER_BY_NAME = 'FILTER_BY_NAME';
const RESTORE_DEFAULT = 'RESTORE_DEFAULT';


function planetFetcher(state = INITIAL_STATE, {
  type, planets, filteredResults, defaultPlanets, name,
}) {
  switch (type) {
    case FETCH_PLANETS:
      return { data: [...planets], isFiltered: false };
    case FILTER_BY_NAME:
      console.log('filtrei');
      return { data: [...filteredResults], filters: { name } };
    case RESTORE_DEFAULT:
      return { data: [...defaultPlanets] };
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(planetFetcher, composeEnhancers(applyMiddleware(thunk)));

export default store;
