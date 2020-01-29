import {
  FILTER_PLANET_NAME,
  ADD_FILTERS,
} from '../actions';

const INITIAL_FILTER = {
  name: '',
  numeric_values: [],
};

const filters = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case FILTER_PLANET_NAME:
      return {
        ...state,
        name: action.value,
      };
    case ADD_FILTERS:
      return {
        ...state,
        numeric_values: [...state.numeric_values, action.value],
      };
    default:
      return state;
  }
};

export default filters;
