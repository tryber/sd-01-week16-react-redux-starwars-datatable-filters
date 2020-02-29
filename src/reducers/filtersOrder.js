import NEW_FILTERS from '../actions/newFiltersTheAction';

const intialState = { column: '', order: 'ASC' };
const filtersOrder = (state = intialState, action) => {
  const { column, order, type } = action;
  switch (type) {
    case NEW_FILTERS:
      return { ...state, filters: column, order };
    default:
      return state;
  }
};
export default filtersOrder;
