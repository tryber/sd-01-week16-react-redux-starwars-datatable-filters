export const loadDataSucess = data => {
  return {
    type: "LOAD_API_SUCESS",
    data
  };
};

export const loadDataError = () => {
  return {
    type: "LOAD_API_ERROR"
  };
};

export const loadDataRequest = () => {
  return {
    type: "LOAD_API_REQUEST"
  };
};

export const loadData = () => {
  return dispatch => {
    dispatch(loadDataRequest());
    fetch("https://swapi.co/api/planets/")
      .then(data => data.json())
      .then(response => dispatch(loadDataSucess(response)))
      .catch(() => dispatch(loadDataError()));
  };
};
