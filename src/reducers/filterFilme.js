import UPDATE_INPUT from '../actions/updateInput';

const intialState = { inputValue: '' };
const filterFilme = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, inputValue: action.inputValue };
    default:
      return state;
  }
};

export default filterFilme;
