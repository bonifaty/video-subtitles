import {h, render} from 'preact';
import {Provider} from 'preact-redux';
import {createStore} from 'redux';
import './app.styl';
import commentsReducers from './reducers';
import AddComment from './components/add-comment';
import CommentsList from './components/comments-list';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');
require('reset-css/reset.css');

let store = createStore(commentsReducers);

render(
  (
    <Provider store={store}>
      <div className='app'>
        <AddComment />
        <CommentsList />
      </div>
    </Provider>

  ), document.body
);
