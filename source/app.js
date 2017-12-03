import {h, render} from 'preact';
import {Provider} from 'preact-redux';
import {createStore} from 'redux';
import combinedReducers from './reducers';
import {loadComments, saveComments} from './utils/localStorage';

import './app.styl';
const b = require('b_').with('app');

// Components
import CommentsList from './components/comments-list';
import VideoPlayer from './components/video-player';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');
require('reset-css/reset.css');

const savedCommentsState = loadComments();
const store = createStore(combinedReducers, {
  comments: savedCommentsState,
});

store.subscribe(() => {
  const currentState = store.getState();
  if (currentState && currentState.comments) {
    saveComments(currentState.comments);
  }
});

render(
  (
    <Provider store={store}>
      <div className='page'>
        <div className={b()}>
          <div className={b('container')}>
            <div className={b('main')}>
              <VideoPlayer />
            </div>
            <div className={b('sidebar')}>
              <CommentsList />
            </div>
          </div>
        </div>
      </div>
    </Provider>

  ), document.body
);
