import {
  ADD_FILTER,
  REMOVE_FILTER,
} from '../actions';


const INITIAL_FILTER = [];

const filters = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.value];
    case REMOVE_FILTER:
      return [...state.filter((filter, index) => (index !== action.pos))];
    default:
      return state;
  }
};

export default filters;
