import { getPlanets } from '../services/swAPI';

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

const receivePlanetsFailure = () => ({
  type: RECEIVE_PLANETS_FAILURE,
  error: 'deuruim',
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
