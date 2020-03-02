import UPDATE_INPUT from '../actions/updateInput';

const intialState = { name: '' };
const filterName = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, name: action.text };
    default:
      return state;
  }
};
export default filterName;
