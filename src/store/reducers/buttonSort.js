import { SORT_TABLE } from '../actions/buttonSort';

const INITIAL_FILTER_STATE = {
  sortTable: {
    column: 'name',
    order: 'ASC',
  },
};

const buttonSort = (state = INITIAL_FILTER_STATE, action) => {
  let columnOrder = 'ASC';
  if (action.value === state.sortTable.column) {
    columnOrder = (state.sortTable.order === 'ASC') ? 'DESC' : 'ASC';
  }
  switch (action.type) {
    case SORT_TABLE:
      return {
        ...state,
        sortTable: {
          column: action.value,
          order: columnOrder,
        },
      };
    default:
      return state;
  }
};

export default buttonSort;
