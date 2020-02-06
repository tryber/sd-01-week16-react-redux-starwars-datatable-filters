const NUMBER_FILTER = 'NUMBER_FILTER';
export const filterNumberDrop = (column, comparison, value) => ({
  type: NUMBER_FILTER,
  column,
  comparison,
  value,
});
export default NUMBER_FILTER;
