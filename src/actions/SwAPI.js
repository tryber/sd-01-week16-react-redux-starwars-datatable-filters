import getPlanetFetch from '../services/swAPI';

export const STAR_WAR_REQUEST = 'STAR_WAR_REQUEST';
export const PLANET_OF_STAR_WAR_SUCCESS = 'PLANET_OF_STAR_WAR_SUCCESS';
export const PLANET_OF_STAR_WAR_FAILURE = 'PLANET_OF_STAR_WAR_FAILURE';
export const FILTER_NAME_FILME = 'FILTER_NAME_FILME';

const starWarRequest = () => ({
  type: STAR_WAR_REQUEST,
});

const planetOfStarWarSuccess = ({ results }) => ({
  type: PLANET_OF_STAR_WAR_SUCCESS,
  data: results,
});

const planetOfStarWarFailure = (error) => ({
  type: PLANET_OF_STAR_WAR_FAILURE,
  error,
});

export const sortAsc = (data, key) => 
data.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));

export const sortDesc = (data, key) => 
data.sort((a, b) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0));

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(starWarRequest());
    return getPlanetFetch().then(
      (planets) => dispatch(planetOfStarWarSuccess(planets)),
      (error) => dispatch(planetOfStarWarFailure(error.message)),
    );
  };
}
