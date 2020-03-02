const INITIAL_STATE = {
  data: [],
  isFilteredByNumber: false,
  filters: {
    numeric_values: {
      column: '',
      comparison: '',
      value: '',
    },
  },
};

const STORE_COLUMN_FILTER = 'STORE_COLUMN_FILTER';
const STORE_COMPARISON_FILTER = 'STORE_COMPARISON_FILTER';
const STORE_VALUE_FILTER = 'STORE_VALUE_FILTER';
const FILTER_BY_NUMBERS = 'FILTER_BY_NUMBER';

export default function filterByNumericValue(state = INITIAL_STATE,
  {
    type, value, column, comparison, filteredPlanets,
  }) {
  switch (type) {
    case STORE_COLUMN_FILTER:
      return { ...state, data: [], filters: { numeric_values: { column, comparison, value } } };
    case STORE_COMPARISON_FILTER:
      return { ...state, data: [], filters: { numeric_values: { column, comparison, value } } };
    case STORE_VALUE_FILTER:
      return { ...state, data: [], filters: { numeric_values: { column, comparison, value } } };
    case FILTER_BY_NUMBERS:
      return { ...state, data: [...filteredPlanets], isFilteredByNumber: true };
    default:
      return state;
  }
}
