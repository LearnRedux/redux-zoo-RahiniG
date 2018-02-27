import { RECEIVE_ANIMAL, SET_NAME, SET_PRESENCE_FILTER, LOAD_SUCCESS, SET_ZOO } from '../actions/zoo';
import name from './name';
import filter from './presenceFilter';
import animals from './animals';
// import loadSuccess from './loadSuccess';
import zoo from './zoo';
import { combineReducers } from 'redux';


export default combineReducers({
  name,
  filter,
  animals
  });