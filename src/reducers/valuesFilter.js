const initialValue = {
  filters: '',
  columns: [],
};

const valueFilterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE_FILTER':
      return {
        ...state,
        filters: action.filters,
        columns: action.columns,
      };
    case 'REMOVE_VALUE_FILTER':
      return {
        ...state,
        filters: state.filters,
        columns: action.columns,
      };
    default:
      return state;
  }
};

export default valueFilterReducer;
