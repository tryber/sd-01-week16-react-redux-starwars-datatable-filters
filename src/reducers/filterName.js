import UPDATE_INPUT from '../actions/inputNameUpdate';

const initial = { name: '' };

const filterName = (state = initial, action) => {
  const { type, text } = action;

  switch (type) {
    case UPDATE_INPUT:
      return {
        ...state,
        name: text,
      };
    default:
      return state;
  }
};

export default filterName;
