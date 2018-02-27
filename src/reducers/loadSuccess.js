import { LOAD_SUCCESS } from '../actions/zoo';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
