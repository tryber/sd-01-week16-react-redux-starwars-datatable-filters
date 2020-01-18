const initialData = {
  data: [],
  isFetching: false,
  sucess: false
};

export const apiServiceReducer = (state = initialData, action) => {
  switch (action.type) {
    case "LOAD_API_REQUEST":
      return {
        data: [],
        isFetching: true,
        sucess: false
      };
    case "LOAD_API_SUCESS":
      return {
        data: action.data,
        isFetching: false,
        sucess: true
      };
    case "LOAD_API_ERROR":
      return {
        data: [],
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
};

