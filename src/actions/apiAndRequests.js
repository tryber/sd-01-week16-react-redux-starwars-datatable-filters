import getPlanetFetch from '../service/starWarAPI';

export const STAR_WAR_REQUEST = 'STAR_WAR_REQUEST';
export const PLANET_OF_STAR_WAR_SUCCESS = 'PLANET_OF_STAR_WAR_SUCCESS';
export const PLANET_OF_STAR_WAR_FAILURE = 'PLANET_OF_STAR_WAR_FAILURE';

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

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(starWarRequest());
    return getPlanetFetch().then(
      (planets) => dispatch(planetOfStarWarSuccess(planets)),
      (error) => dispatch(planetOfStarWarFailure(error.message)),
    );
  };
}
