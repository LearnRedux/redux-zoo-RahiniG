export const RECEIVE_ANIMAL = 'zoo/RECEIVE_ANIMAL';
export const BREAK_OUT = 'zoo/BREAK_OUT';
export const receiveAnimal = (animal) => ({
  type: RECEIVE_ANIMAL,
  animal,
});
export const breakOut = (name) => ({
  type: BREAK_OUT,
  name
});
