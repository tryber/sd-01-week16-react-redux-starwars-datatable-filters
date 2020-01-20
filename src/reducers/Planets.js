import {
  RECEIVE_PLANETS,
} from '../actions';

const defaultState = {
  data: [],
};

const planets = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_PLANETS:
      return {
        ...state,
        data: [...action.data],
      };
    default:
      return state;
  }
};

export default planets;
