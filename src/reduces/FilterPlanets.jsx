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
  if(action === 'none') return null;
  return action;
}

const filterPlanets = (state = InitialState, action) => {
  console.log('received action:', action);
  switch (action.type) {
    case FilterText:
      return {
        ...state,
        filters: { 
          ...state.filters,
          text: action.text },
      };
    case FilterNumberColumn:
      return {
        ...state,
        filters: {
          ...state.filters,
          numericValues: {
            ...state.filters.numericValues,
            column: nullElements(action.column),
          },
        },
      };
    case FilterNumberComparison:
      return {
        ...state,
        filters: {
          ...state.filters,
          numericValues: {
            ...state.filters.numericValues,
            comparison: nullElements(action.comparison),
          },
        },
      };
    case FilterNumberValue:
      return {
        ...state,
        filters: {
          ...state.filters,
          numericValues: {
            ...state.filters.numericValues,
            value: nullElements(action.value),
          },
        },
      };
    default:
      return state;
  }
};

export default filterPlanets;
