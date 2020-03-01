import { FILTER_IS_ADD, FILTER_IS_REMOVED } from '../actions/filtersUpdate';

const intialState = {
  numeric_values: [],
};
const filters = (state = intialState, action) => {
  const { value, type } = action;
  switch (type) {
    case FILTER_IS_ADD:
      return {
        ...state,
        numeric_values: [...state.numeric_values, value],
      };
    case FILTER_IS_REMOVED:
      return {
        ...state,
        numeric_values: [...state.numeric_values.filter((filter, index) => index !== action.value)],
      };
    default:
      return state;
  }
};
export default filters;