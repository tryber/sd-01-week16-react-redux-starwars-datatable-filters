const initialValue = '';

export const textFilterReducer = (state = initialValue, action) => {
  if (action.type === 'INPUT_TEXT_CHANGE') {
    return {
      ...state,
      filters: action.filters,
    };
  }
  return state;
};
