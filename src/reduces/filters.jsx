import {
  FILTER_TEXT,
  FILTER_NUMBER_COLUMN,
  FILTER_NUMBER_COMPARISON,
  FILTER_NUMBER_VALUE,
  ADD_FILTER,
  RESET_FILTER,
  CLEAR_ONE_FILTER,
  MODIFY_AVAILABLE_CATEGORY,
  CHANGE_ORDER,
  CHANGE_COLUMN,
} from '../actions/filters';

const InitialState = {
  name: '',
  numeric_values: {
    column: '',
    comparison: '',
    value: '',
  },
  add_filter: [],
  available_categories: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  shortOrder: {
    column: 'name',
    order: 'ASC',
  },
};

function filColumn(state, action) {
  return {
    ...state,
    numeric_values: {
      ...state.numeric_values,
      column: action.column,
    },
  };
}

function filComparison(state, action) {
  return {
    ...state,
    numeric_values: {
      ...state.numeric_values,
      comparison: action.comparison,
    },
  };
}

function filValue(state, action) {
  return {
    ...state,
    numeric_values: {
      ...state.numeric_values,
      value: action.value,
    },
  };
}

function filAdd(state, action) {
  return {
    ...state,
    add_filter: [...state.add_filter, action.node],
  };
}

function filReset(state) {
  return {
    ...state,
    numeric_values: {
      ...state.numeric_values,
      column: '',
      comparison: '',
      value: '',
    },
  };
}

function filClear(state, action) {
  return {
    ...state,
    add_filter: action.node,
  };
}

function modifyCategories(state, action) {
  return {
    ...state,
    available_categories: action.node,
  };
}

function changeOrder(state, action) {
  return {
    ...state,
    shortOrder: {
      ...state.shortOrder,
      order: action.order,
    },
  };
}

function changeColumn(state, action) {
  return {
    ...state,
    shortOrder: {
      ...state.shortOrder,
      column: action.column,
    },
  };
}

const filters = (state = InitialState, action) => {
  console.log(state);
  switch (action.type) {
    case FILTER_TEXT:
      return { ...state, name: action.name };
    case FILTER_NUMBER_COLUMN:
      return filColumn(state, action);
    case FILTER_NUMBER_COMPARISON:
      return filComparison(state, action);
    case FILTER_NUMBER_VALUE:
      return filValue(state, action);
    case ADD_FILTER:
      return filAdd(state, action);
    case RESET_FILTER:
      return filReset(state);
    case CLEAR_ONE_FILTER:
      return filClear(state, action);
    case MODIFY_AVAILABLE_CATEGORY:
      return modifyCategories(state, action);
    case CHANGE_ORDER:
      return changeOrder(state, action);
    case CHANGE_COLUMN:
      return changeColumn(state, action);
    default:
      return state;
  }
};

export default filters;
