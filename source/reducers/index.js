import {combineReducers} from 'redux';
import subtitles from './subtitles';

const combinedReducers = combineReducers({
  subtitles,
});

export default combinedReducers;
