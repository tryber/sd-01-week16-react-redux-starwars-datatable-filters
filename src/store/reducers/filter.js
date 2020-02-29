import { FILTER_NAME } from '../actions/filterName';
import { FILTER_NUMBER, REMOVE_FILTER } from '../actions/filterNumber';

const INITIAL_FILTER = {
  name: '',
  numeric_values: [],
};

const filterName = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        name: action.text,
      };
    case FILTER_NUMBER:
      return {
        ...state,
        numeric_values: [...state.numeric_values, action.value],
      };

    case REMOVE_FILTER:
      return {
        ...state,
        numeric_values: [...state.numeric_values.filter((fil) => fil !== action.value)],
      };
    default:
      return state;
  }
};

export default filterName;
