import { RECEIVE_ANIMAL, LOAD_SUCCESS } from '../actions/zoo';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL:
      return action.animal;
    case LOAD_SUCCESS:
      return action.payload.animals;  
    default:
      return state;
  }
};
