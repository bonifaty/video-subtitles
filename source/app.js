import {h, render} from 'preact';
import {Provider} from 'preact-redux';
import {createStore} from 'redux';
import commentsReducers from './reducers';

import './app.styl';
const b = require('b_').with('app');

// Components
import AddComment from './components/add-comment';
import CommentsList from './components/comments-list';
import Video from './components/video';
import Timeline from './components/timeline';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');
require('reset-css/reset.css');

let store = createStore(commentsReducers);

render(
  (
    <Provider store={store}>
      <div className={b()}>
        <div className={b('main')}>
          <Video />
          <Timeline />
        </div>
        <div className={b('sidebar')}>
          <AddComment />
          <CommentsList />
        </div>
      </div>
    </Provider>

  ), document.body
);
