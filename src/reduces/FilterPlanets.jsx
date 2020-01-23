import { FilterText } from '../actions/FilterText';
import {
  FilterNumberColumn,
  FilterNumberComparison,
  FilterNumberValue,
  CallingFilter,
} from '../actions/FilterNumber';

const InitialState = {
  filters: {
    text: '',
    numericValues: {
      column: [],
      comparison: [],
      value: [],
    },
    categorys: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    isCallingFilter: false,
  },
};

function filText(state, action) {
  return { ...state, filters: { ...state.filters, text: action.text } };
}

function filColumn(state, action) {
  return {
    ...state,
    filters: {
      ...state.filters,
      numericValues: { ...state.filters.numericValues, column: [...state.filters.numericValues.column, action.column ] },
    },
  };
}

function filComparison(state, action) {
  return {
    ...state,
    filters: {
      ...state.filters,
      numericValues: {
        ...state.filters.numericValues,
        comparison: [...state.filters.numericValues.comparison, action.comparison ],
      },
    },
  };
}

function filValue(state, action) {
  return {
    ...state,
    filters: {
      ...state.filters,
      numericValues: {
        ...state.filters.numericValues,
        value: [...state.filters.numericValues.value, action.value ],
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
      case CallingFilter:
        return { ...state, isCallingFilter: action.boolean };
    default:
      return state;
  }
};

export default filterPlanets;
