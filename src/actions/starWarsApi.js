export const loadDataSucess = (data) => ({
  type: 'LOAD_API_SUCESS',
  data,
});

export const loadDataError = () => ({
  type: 'LOAD_API_ERROR',
});

export const loadDataRequest = () => ({
  type: 'LOAD_API_REQUEST',
});

export const loadData = () => (dispatch) => {
  dispatch(loadDataRequest());
  fetch('https://swapi.co/api/planets/')
    .then((data) => data.json())
    .then((response) => dispatch(loadDataSucess(response)))
    .catch(() => dispatch(loadDataError()));
};
