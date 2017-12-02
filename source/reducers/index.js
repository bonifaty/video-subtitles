import {combineReducers} from 'redux';
import comments from './comments';

const commentsUrl = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_BLOB_URL':
      return action.url;
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  comments,
  commentsUrl,
});

export default combinedReducers;
