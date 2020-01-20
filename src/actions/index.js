import getStarWarsPlanets from '../services/starWarsApi';

export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const RECEIVE_PLANETS_FAILURE = 'RECEIVE_PLANETS_FAILURE';
export const REQUEST_PLANETS = 'REQUEST_PLANETS';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanetsSuccess = ({ results }) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  data: results,
});

const receivePlanetsFailure = (error) => ({
  type: RECEIVE_PLANETS_FAILURE,
  error,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return getStarWarsPlanets()
      .then(
        (data) => dispatch(receivePlanetsSuccess(data)),
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}

export const ADD_FILTER_NAME = 'ADD_FILTER_NAME';

export const addFilterName = (value) => ({
  type: ADD_FILTER_NAME,
  value,
});

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const addFilter = (value) => ({
  type: ADD_FILTER,
  value,
});

export const removeFilter = (pos) => ({
  type: REMOVE_FILTER,
  pos,
});

