const INITIAL_STATE = {
  data: [],
  filters: {
    name: '',
  },
};

const FILTER_BY_NAME = 'FILTER_BY_NAME';

export default function filterByName(state = INITIAL_STATE, {
  type, filteredResults, name,
}) {
  switch (type) {
    case FILTER_BY_NAME:
      return { data: [...filteredResults], filters: { name } };
    default:
      return state;
  }
}
