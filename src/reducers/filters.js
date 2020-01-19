const initialValue = "";

export const finalFilterReducer = (state = initialValue, action) => {
  if (action.type === "FINAL_DATA_FILTER") {
    return {
      ...state,
      data: action.data
    };
  }
  return state;
};
