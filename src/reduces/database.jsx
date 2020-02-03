import {
  REQUEST_PLANETS,
  RECEIVE_PLANETS_SUCCESS,
  RECEIVE_PLANETS_FALIURE,
} from '../actions/database';

const InitialState = {
  data: null,
  isFetching: false,
};

const PlanetsData = (state = InitialState, action) => {
  console.log(state);
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case RECEIVE_PLANETS_FALIURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default PlanetsData;
