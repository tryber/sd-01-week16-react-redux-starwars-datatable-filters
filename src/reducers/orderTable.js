import { ORDER_TABLE } from '../actions/TableAsc';

const intialState = { column: 'name', order: 'ASC' };
const filtersOrder = (state = intialState, action) => {
  const { column, order, type } = action;
  switch (type) {
    case ORDER_TABLE:
      return { ...state, column, order };
    default:
      return state;
  }
};
export default filtersOrder;
