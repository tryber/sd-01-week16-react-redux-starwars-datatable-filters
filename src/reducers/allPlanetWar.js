import {
  STAR_WAR_REQUEST,
  PLANET_OF_STAR_WAR_FAILURE,
  PLANET_OF_STAR_WAR_SUCCESS,
} from '../actions';

const INITIAL_STATE_PLANETS = {
  isFetching: false,
};

const allPlanetWar = (state = INITIAL_STATE_PLANETS, action) => {
  switch (action.type) {
    case STAR_WAR_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case PLANET_OF_STAR_WAR_FAILURE:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case PLANET_OF_STAR_WAR_SUCCESS:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default allPlanetWar;
