import { getPlanets } from '../services/swAPI';

export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const RECEIVE_PLANETS_FAILURE = 'RECEIVE_PLANETS_FAILURE';
export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const FILTER_PLANET_NAME = 'FILTER_PLANET_NAME';

export const filterPlanetName = (value) => ({
  type: FILTER_PLANET_NAME,
  value,
});

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
    return getPlanets()
      .then(
        (data) => dispatch(receivePlanetsSuccess(data)),
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}
