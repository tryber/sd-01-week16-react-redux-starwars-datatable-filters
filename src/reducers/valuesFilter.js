const initialValue = {
  filters: '',
  columns: []
};

export const valueFilterReducer = (state = initialValue, action) => {
  if (action.type === 'UPDATE_VALUE_FILTER') {
    return {
      ...state,
      filters: action.filters,
      columns: action.columns
    };
  }
  return state;
};
