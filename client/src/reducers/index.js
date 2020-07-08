import { combineReducers } from 'redux';
import { phonesReducer } from './phonesReducers';

export const rootReducer = combineReducers({
  phones: phonesReducer,
});
