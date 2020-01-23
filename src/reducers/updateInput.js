import UPDATE_INPUT from '../actions/updateInput';

const intialState = { inputValue: '' };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, inputValue: action.text };
    default:
      return state;
  }
};
export default reducer;
