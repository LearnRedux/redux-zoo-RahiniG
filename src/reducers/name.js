import { SET_NAME, LOAD_SUCCESS } from '../actions/zoo';

export default (state = 'Hoboken', action) => {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    case LOAD_SUCCESS:
      return action.payload.name;  
    default:
      return state;
  }
};
