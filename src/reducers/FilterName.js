import {
  ADD_FILTER_NAME,
} from '../actions';

const INITIAL_FILTER = {};

const filtersName = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case ADD_FILTER_NAME:
      return {
        ...state, filters: action.value,
      };
    default:
      return state;
  }
};

export default filtersName;
