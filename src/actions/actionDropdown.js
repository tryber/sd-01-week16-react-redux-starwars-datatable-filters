export const CHOOSE_A_COLUMN_NAME = 'CHOOSE_A_COLUMN_NAME';
export const CHOOSE_LARGER_SMALLER_OR_EQUAL_COLUMN = 'CHOOSE_LARGER_SMALLER_OR_EQUAL_COLUMN';
export const PLACE_AN_INPUT = 'PLACE_AN_INPUT';

export const chooseColumnName = (column) => ({
  type: CHOOSE_A_COLUMN_NAME,
  numeric_values: column,
});

export const ChooseComparison = (comparison) => ({
  type: CHOOSE_LARGER_SMALLER_OR_EQUAL_COLUMN,
  numeric_values: comparison,
});

export const placeAnInput = (value) => ({
  type: PLACE_AN_INPUT,
  numeric_values: value,
});
