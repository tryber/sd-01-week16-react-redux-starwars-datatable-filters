export const FILTER_TEXT = 'FILTER_TEXT';
export const FILTER_NUMBER_COLUMN = 'FILTER_NUMBER_COLUMN';
export const FILTER_NUMBER_COMPARISON = 'FILTER_NUMBER_COMPARISON';
export const FILTER_NUMBER_VALUE = 'FILTER_NUMBER_VALUE';
export const ADD_FILTER = 'ADD_FILTER';
export const RESET_FILTER = 'RESET_FILTER';
export const CLEAR_ONE_FILTER = 'CLEAR_ONE_FILTER';
export const MODIFY_AVAILABLE_CATEGORY = 'MODIFY_AVAILABLE_CATEGORY';
export const CHANGE_ORDER = 'CHANGE_ORDER';
export const CHANGE_COLUMN = 'CHANGE_COLUMN';

export const filterText = (name) => ({
  type: FILTER_TEXT,
  name,
});

export const filterNumberColumn = (column) => ({
  type: FILTER_NUMBER_COLUMN,
  column,
});

export const filterNumberComparison = (comparison) => ({
  type: FILTER_NUMBER_COMPARISON,
  comparison,
});

export const filterNumberValue = (value) => ({
  type: FILTER_NUMBER_VALUE,
  value,
});

export const addFilter = (node) => ({
  type: ADD_FILTER,
  node,
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});

export const clearOneFilter = (node) => ({
  type: CLEAR_ONE_FILTER,
  node,
});

export const modifyCategories = (node) => ({
  type: MODIFY_AVAILABLE_CATEGORY,
  node,
});

export const changeOrder = (order) => ({
  type: CHANGE_ORDER,
  order,
});

export const changeColumn = (column) => ({
  type: CHANGE_COLUMN,
  column,
});
