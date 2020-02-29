export const FILTER_IS_ADD = 'FILTER_IS_ADD';
export const FILTER_IS_REMOVED = 'FILTER_IS_REMOVED';

export const removeFilters = (value) => ({
  type: FILTER_IS_REMOVED,
  value,
});

export const addFilters = (value) => ({
  type: FILTER_IS_ADD,
  value,
});