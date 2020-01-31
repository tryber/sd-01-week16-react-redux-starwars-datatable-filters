import {
  CHOOSE_A_COLUMN_NAME,
  CHOOSE_LARGER_SMALLER_OR_EQUAL_COLUMN,
  PLACE_AN_INPUT,
} from '../actions/actionDropdown';

const intialState = { numeric_values: [] };
const filterOfDropDown = (state = intialState, action) => {
  switch (action.type) {
    case CHOOSE_A_COLUMN_NAME:
      return [{ ...state, selectName: action.column }];
    case CHOOSE_LARGER_SMALLER_OR_EQUAL_COLUMN:
      return [{ ...state, selectColumn: action.comparison }];
    case PLACE_AN_INPUT:
      return [{ ...state, selectInput: action.value }];
    default:
      return state;
  }
};

export default filterOfDropDown;
