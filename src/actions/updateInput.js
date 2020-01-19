export const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateInput = (input) => ({
  type: UPDATE_INPUT,
  charge: { name: input, len: input.length },
});
