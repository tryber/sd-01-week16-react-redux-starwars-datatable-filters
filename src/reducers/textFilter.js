const initialValue = {
  filter: ""
};

export const textFilterReducer = (state = initialValue, action) => {
  if (action.type === "INPUT_TEXT_CHANGE") {
    return {
      ...state,
      filter: action.filter
    };
  }
  return state;
};
