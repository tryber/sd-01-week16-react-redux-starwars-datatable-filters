import NUMBER_FILTER from '../actions/actionNumberFilter';

const intialState = [];
const filters = (state = intialState, action) => {
  const {
    column, comparison, value, type,
  } = action;
  switch (type) {
    case NUMBER_FILTER:
      return [
        ...state,
        {
          numeric_values: { column, comparison, value },
        },
      ];
    default:
      return state;
  }
};
export default filters;
