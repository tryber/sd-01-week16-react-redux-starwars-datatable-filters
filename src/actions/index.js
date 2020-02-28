import getPlanet from '../services/StarWarsAPI';

export const REQUEST_STAR_WARS_API = 'REQUEST_STAR_WARS_API';
export const REQUEST_STAR_WARS_SUCCESS = 'REQUEST_STAR_WARS_SUCCESS';
export const REQUEST_STAR_WARS_FAILURE = 'REQUEST_STAR_WARS_FAILURE';

const requestStarWarsAPI = () => ({
  type: REQUEST_STAR_WARS_API,
});

starWarsAPISuccess = ({ results }) => ({
  REQUEST_STAR_WARS_SUCCESS,
  data: results,
});

starWarsAPIFailure = (error) => ({
  type: REQUEST_STAR_WARS_FAILURE,
  error,
});

export function fetchStarWarsAPI() {
  return (dispatch) => {
    dispatch(requestStarWarsAPI());
    return getPlanet()
      .then(
        (data) => dispatch(starWarsAPISuccess(data)),
        (error) => dispatch(starWarsAPIFailure(error.message)),
      );
  };
}

