import getDataAPI from './API';

export const REQUEST_SWAPI = 'REQUEST_SWAPI';
export const REQUEST_SWAPI_SUCCESS = 'REQUEST_SWAPI_SUCCESS';
export const REQUEST_SWAPI_FAILED = 'REQUEST_SWAPI_FAILED';

const requestSWAPI = () => ({
  type: REQUEST_SWAPI,
});

const requestSWAPISuccess = () => ({
  type: REQUEST_SWAPI_SUCCESS,
});

const requestSWAPIFailed = () => ({
  type: REQUEST_SWAPI_FAILED,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestSWAPI());

    return getDataAPI()
      .then(
        (request) => dispatch(requestSWAPISuccess(request)),
        (error) => dispatch(requestSWAPIFailed(error.message)),
      );
  };
}
