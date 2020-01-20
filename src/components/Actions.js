import getDataAPI from './API';

export const REQUEST_SWAPI = 'REQUEST_SWAPI';
export const REQUEST_SWAPI_SUCCESS = 'REQUEST_SWAPI_SUCCESS';
export const REQUEST_SWAPI_FAILED = 'REQUEST_SWAPI_FAILED';

const requestSWAPI = () => ({
  type: REQUEST_SWAPI,
});

const requestSWAPISuccess = ({ results }) => ({
  type: REQUEST_SWAPI_SUCCESS,
  data: results,
});

const requestSWAPIFailed = (error) => ({
  type: REQUEST_SWAPI_FAILED,
  error,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestSWAPI());
    return getDataAPI()
      .then(
        (data) => dispatch(requestSWAPISuccess(data)),
        (error) => dispatch(requestSWAPIFailed(error.message)),
      );
  };
}
