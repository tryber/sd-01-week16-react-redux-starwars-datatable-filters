import getStarWarsPlanets from '../../services/starWarsAPI';

export const REQUEST_STAR_WARS_API = 'REQUEST_STAR_WARS_API';
export const RECEIVE_STAR_WARS_API_SUCCESS = 'REQUEST_STAR_WARS_API_SUCCESS';
export const RECEIVE_STAR_WARS_API_FAILURE = 'REQUEST_STAR_WARS_API_FAILURE';

const requestStarWarsAPI = () => ({
  type: REQUEST_STAR_WARS_API,
});

const receiveStarWarsAPISuccess = ({ results }) => ({
  type: RECEIVE_STAR_WARS_API_SUCCESS,
  data: results,
});

const receiveStarWarsAPIFailure = (error) => ({
  type: RECEIVE_STAR_WARS_API_SUCCESS,
  error,
});

export function fetchStarWarsAPI() {
  return (dispatch) => {
    dispatch(requestStarWarsAPI());
    return getStarWarsPlanets()
      .then(
        (data) => dispatch(receiveStarWarsAPISuccess(data)),
        (error) => dispatch(receiveStarWarsAPIFailure(error.message)),
      );
  };
}
