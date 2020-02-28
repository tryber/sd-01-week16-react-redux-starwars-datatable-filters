import { REQUEST_STAR_WARS_API, REQUEST_STAR_WARS_SUCCESS, REQUEST_STAR_WARS_FAILURE } from '../actions/index';

const INITIAL_PLANET_STATE = {
  isFetching: false,
};

const Planets = (state = INITIAL_PLANET_STATE) => {
  switch (action.type) {
    case REQUEST_STAR_WARS_API:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_STAR_WARS_SUCCESS:
      return {
        ...state,
        data: action.type,
        isFetching: false,
      };
    case REQUEST_STAR_WARS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default Planets;
