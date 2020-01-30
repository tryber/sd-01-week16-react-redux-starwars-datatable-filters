import CHOISE_FOR_DROP_DONW from '../actions/filterDropDown';

const intialState = { select: '' };
const filterOfDropDown = (state = intialState, action) => {
  switch (action.type) {
    case CHOISE_FOR_DROP_DONW:
      return { ...state, select: action.text };
    default:
      return state;
  }
};
export default filterOfDropDown;
