import { FilterText } from '../actions/FilterText';
import {
  FilterNumberColumn,
  FilterNumberComparison,
  FilterNumberValue,
} from '../actions/FilterNumber';

const InitialState = {
  filters: {
    text: '',
    numericValues: {
      column: null,
      comparison: null,
      value: null,
    },
    categorys: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  },
};

function nullElements(action) {
  if (action === 'none') return null;
  return action;
}

function filText(state, action) {
  return { ...state, filters: { ...state.filters, text: action.text } };
}

function filColumn(state, action) {
  return {
    ...state, filters: {
      ...state.filters,
      numericValues: { ...state.filters.numericValues, column: nullElements(action.column) },
    },
  };
}

function filComparison(state, action) {
  return {
    ...state, filters: {
      ...state.filters, numericValues: {
        ...state.filters.numericValues,
        comparison: nullElements(action.comparison)
      },
    },
  };
}

function filValue(state, action) {
  return {
    ...state, filters: {
      ...state.filters, numericValues: {
        ...state.filters.numericValues,
        value: nullElements(action.value)
      },
    },
  };
}

const filterPlanets = (state = InitialState, action) => {
  switch (action.type) {
    case FilterText:
      return filText(state, action);
    case FilterNumberColumn:
      return filColumn(state, action);
    case FilterNumberComparison:
      return filComparison(state, action);
    case FilterNumberValue:
    return filValue(state, action);
    default:
      return state;
  }
};

export default filterPlanets;

