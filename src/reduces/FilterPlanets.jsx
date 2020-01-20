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
    }
  },
};

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
            column: action.column,
          }
        },
      };
    case FilterNumberComparison:
      return {
        ...state,
        filters: {
          ...state.filters,
          numericValues: {
            ...state.filters.numericValues,
            comparison: action.comparison,
          }
        },
      };
    case FilterNumberValue:
      return {
        ...state,
        filters: {
          ...state.filters,
          numericValues: {
            ...state.filters.numericValues,
            value: action.value,
          }
        },
      };
    default:
      return state;
  }
};

export default filterPlanets;
