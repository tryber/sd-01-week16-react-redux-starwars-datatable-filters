import {
  REQUEST_PLANETS,
  RECEIVE_PLANETS_SUCCESS,
  RECEIVE_PLANETS_FAILURE,
} from '../actions';

const INITIAL_PLANETS = {
  isFetching: false,
};

const data = (state = INITIAL_PLANETS, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case RECEIVE_PLANETS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default data;
