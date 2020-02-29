import {
  REQUEST_STAR_WARS_API,
  RECEIVE_STAR_WARS_API_SUCCESS,
  RECEIVE_STAR_WARS_API_FAILURE,
} from '../actions/starWarsAPI';

const INITIAL_STATE = {
  isFetching: false,
};

const planetsStarWars = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STAR_WARS_API:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_STAR_WARS_API_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case RECEIVE_STAR_WARS_API_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default planetsStarWars;
