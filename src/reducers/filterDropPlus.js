import CHOISE_FOR_DROP_PLUS from '../actions/filterDropDown';

const intialState = { select: '' };
const filterOfDropPlus = (state = intialState, action) => {
  switch (action.type) {
    case CHOISE_FOR_DROP_PLUS:
      return { ...state, select: action.text };
    default:
      return state;
  }
};
export default filterOfDropPlus;
