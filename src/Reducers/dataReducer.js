const initialData = {
  data: {},
  isFetching: true,
};

const dataReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'LOAD_API_REQUEST':
      return {
        ...state,
        isFetching: true,
      };
    case 'LOAD_API_SUCESS':
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case 'LOAD_API_ERROR':
      return {
        ...state,
        data: [],
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default dataReducer;
