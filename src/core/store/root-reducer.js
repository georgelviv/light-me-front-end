import { combineReducers } from 'redux';
import { lightReducer } from './light';

const rootReducer = combineReducers({
  lightReducer
});

export { rootReducer };