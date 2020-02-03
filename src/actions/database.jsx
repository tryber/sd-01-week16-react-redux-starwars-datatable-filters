import fetchingPlanets from '../services/APIRequest';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const RECEIVE_PLANETS_FALIURE = 'RECEIVE_PLANETS_FALIURE';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanetsSucess = (data) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  data,
});

const receivePlanetsFaliure = (error) => ({
  type: RECEIVE_PLANETS_FALIURE,
  error,
});

function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return fetchingPlanets()
      .then(
        (PlanetsData) => dispatch(receivePlanetsSucess(PlanetsData.results)),
        (error) => dispatch(receivePlanetsFaliure(error.message)),
      );
  };
}

export default fetchPlanets;
