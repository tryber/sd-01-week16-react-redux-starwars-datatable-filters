export const loadDataSucess = (data) => ({
  type: 'LOAD_API_SUCESS',
  data,
});

export const orderColumn = (value) => ({
  type: 'ORDER_COLUMN',
  value,
});

export const loadDataError = (error) => ({
  type: 'LOAD_API_ERROR',
  error,
});

export const loadDataRequest = () => ({
  type: 'LOAD_API_REQUEST',
});


export const changeFilterText = (value) => ({
  type: 'FILTER_TEXT',
  value,
});

export const changeFilter = (value) => ({
  type: 'SELECT_FILTER',
  value,
});

export const removeFilter = (value) => ({
  type: 'FILTER_IS_REMOVED',
  value,
});

export const loadData = () => (dispatch) => {
  dispatch(loadDataRequest());
  fetch('https://swapi.co/api/planets')
    .then((data) => data.json())
    .then((response) => dispatch(loadDataSucess(response.results)))
    .catch((error) => dispatch(loadDataError(error.message)));
};

export const updatingValuesFilter = (filters, columns) => ({
  type: 'UPDATE_VALUE_FILTER',
  filters,
  columns,
});
