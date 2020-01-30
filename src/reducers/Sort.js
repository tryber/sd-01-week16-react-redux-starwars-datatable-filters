import {
  SORT_COLUMN,
} from '../actions';

const INITIAL_FILTER_STATE = {
  sortColumn: {
    column: 'name',
    order: 'ASC',
  },
};

const sort = (state = INITIAL_FILTER_STATE, action) => {
  switch (action.type) {
    case SORT_COLUMN:
      return {
        ...state,
        sortColumn: action.value,
      };
    default:
      return state;
  }
};

export default sort;
