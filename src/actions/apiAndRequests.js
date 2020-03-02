import getPlanetFetch from '../service/starWarAPI';

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

export const filterNamesFilme = (inputValue) => ({
  type: FILTER_NAME_FILME,
  inputValue,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(starWarRequest());
    return getPlanetFetch().then(
      (planets) => dispatch(planetOfStarWarSuccess(planets)),
      (error) => dispatch(planetOfStarWarFailure(error.message)),
    );
  };
}
