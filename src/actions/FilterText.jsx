export const FilterText = 'FilterText';

const filterText = (string) => ({
  type: FilterText,
  text: string,
});

export default filterText;
