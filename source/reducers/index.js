import {combineReducers} from 'redux';
import comments from './comments';

const combinedReducers = combineReducers({
  comments,
});

export default combinedReducers;
