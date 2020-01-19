import UPDATE_INPUT from '../actions/apiAndRequests';

const intialState = { inputValue: '' };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, input: action.charge };
    default:
      return state;
  }
};

export default reducer;
