import name from './name';
import filter from './presenceFilter';
import animals from './animals';
import loadSuccess from './loadSuccess';
import zoo from './zoo';
import { combineReducers } from 'redux';


export {
    name,
    filter,
    animals,
    zoo
  };

/* export default (state = [], action) => {
  switch (action.type) {
    case ZOO:
      return action.payload;  
    default:
      return state;
  }
}; */
