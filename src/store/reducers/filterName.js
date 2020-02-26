import {
  FILTER_NAME,
} from '../actions/filterName';

const INITIAL_FILTER = '';

const filterName = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filters: action.text,
      };
    default:
      return state;
  }
};

export default filterName;
