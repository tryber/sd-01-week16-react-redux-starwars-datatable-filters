const initialValue = {
  filters: {}
};

export const valueFilterReducer = (state = initialValue, action) => {
  if (action.type === "UPDATE_VALUE_FILTER") {
    return {
      ...state,
      filters: action.filters
    };
  }
  return state;
};
