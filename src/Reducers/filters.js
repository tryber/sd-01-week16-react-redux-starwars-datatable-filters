const initialData = {
  name: '',
  numeric_values: [],
};

const filters = (state = initialData, action) => {
  switch (action.type) {
    case 'FILTER_TEXT':
      return {
        ...state,
        name: action.value,
      };
    case 'SELECT_FILTER':
      return {
        ...state,
        numeric_values: [...state.numeric_values, action.value],
      };
    case 'FILTER_IS_REMOVED':
      return {
        ...state,
        numeric_values: [...state.numeric_values.filter((tag) => tag !== action.value)],
      };
    default:
      return state;
  }
};

// ...state.numeric_values.filter((tag, index) => index !== action.value)

export default filters;
