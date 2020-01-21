import { FILTER_PLANET_NAME } from '../actions';

const INITIAL_FILTER = {};

const filterName = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case FILTER_PLANET_NAME:
      return {
        ...state,
        filters: action.value,
      };
    default:
      return state;
  }
};

export default filterName;
