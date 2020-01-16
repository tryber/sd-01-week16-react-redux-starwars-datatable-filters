import {
  ADD_FILTER
} from '../actions';

const INITIAL_FILTER = {}

const filters = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.value],
      }
    default:
      return state;
  }
}

export default filters;
