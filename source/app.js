import {h, render} from 'preact';
import MyComponent from './components/video/index';
import './app.styl';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');
require('reset-css/reset.css');

render(
  (
    <div className='app'>
      <MyComponent />
    </div>
  ), document.body
);
