import {h, render} from 'preact';
import {Provider} from 'preact-redux';
import {createStore} from 'redux';
import combinedReducers from './reducers';
import {loadComments, saveComments} from './utils/localStorage';

import './app.styl';
const b = require('b_').with('app');

// Components
// import AddComment from './components/add-comment';
import CommentsList from './components/comments-list';
import Video from './components/video';
import Timeline from './components/timeline';
import {commentsToWebVttBlobUrl} from './utils/webVtt';
import {updateCommentsUrl} from './actions/index';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');
require('reset-css/reset.css');

const savedCommentsState = loadComments();
const webVttBlobUrl = commentsToWebVttBlobUrl(savedCommentsState);
const store = createStore(combinedReducers, {
  comments: savedCommentsState,
  commentsUrl: webVttBlobUrl,
});

store.subscribe(() => {
  const currentState = store.getState();
  if (currentState && currentState.comments) {
    saveComments(currentState.comments);
    updateCommentsUrl(commentsToWebVttBlobUrl(currentState.comments));
  }
});

render(
  (
    <Provider store={store}>
      <div className={b()}>
        <div className={b('main')}>
          <Video />
          <Timeline />
        </div>
        <div className={b('sidebar')}>
          {/* <AddComment />*/}
          <CommentsList />
        </div>
      </div>
    </Provider>

  ), document.body
);
