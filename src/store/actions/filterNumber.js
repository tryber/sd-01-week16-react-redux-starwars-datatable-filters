export const FILTER_NUMBER = 'FILTER_NUMBER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const filterNumber = (value) => ({
  type: FILTER_NUMBER,
  value,
});

export const removeFilter = (value) => ({
  type: REMOVE_FILTER,
  value,
});
