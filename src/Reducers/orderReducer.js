const INITIAL_FILTER_STATE = {
  column: 'name',
  order: 'ASC',
};

const sort = (state = INITIAL_FILTER_STATE, action) => {
  let columnOrder = 'ASC';
  if (action.value === state.column) {
    columnOrder = (state.order === 'ASC') ? 'DESC' : 'ASC';
  }
  switch (action.type) {
    case 'ORDER_COLUMN':
      return {
        ...state,
        column: action.value,
        order: columnOrder,
      };
    default:
      return state;
  }
};

export default sort;
