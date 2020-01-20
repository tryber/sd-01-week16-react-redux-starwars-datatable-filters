export const FilterNumberColumn = 'FilterNumberColumn';
export const FilterNumberComparison = 'FilterNumberComparison';
export const FilterNumberValue = 'FilterNumberValue';

export const filterNumberColumn = (text) => ({
  type: FilterNumberColumn,
  column: text,
});

export const filterNumberComparison = (text) => ({
  type: FilterNumberComparison,
  comparison: text,
});

export const filterNumberValue = (text) => ({
  type: FilterNumberValue,
  value: text,
});
