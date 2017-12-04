import {h, render} from 'preact';
import {Provider} from 'preact-redux';
import {createStore} from 'redux';
import combinedReducers from './reducers';
import {loadSubtitles, saveSubtitles} from './utils/localStorage';

const VIDEO_DURATION = 144.916;
const VIDEO_URL = 'https://s3.eu-central-1.amazonaws.com/andrewabramov/video/iceland.mp4';

import './app.styl';
const b = require('b_').with('app');

// Components
import VideoPlayer from './components/video-player';
import Sidebar from './components/sidebar';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');
require('reset-css/reset.css');

const savedSubtitlesState = loadSubtitles();
const store = createStore(combinedReducers, {
  subtitles: savedSubtitlesState,
});

store.subscribe(() => {
  const currentState = store.getState();
  if (currentState && currentState.subtitles) {
    saveSubtitles(currentState.subtitles);
  }
});

render(
  (
    <Provider store={store}>
      <div className='page'>
        <div className={b('header')}>
          <div className={b('info')}>
            <h1>Iceland Drone Footage</h1>
            <p>Duration: <strong>144.915 seconds</strong></p>
          </div>
        </div>
        <div className={b()}>
          <div className={b('container')}>
            <div className={b('main')}>
              <VideoPlayer duration={VIDEO_DURATION} videoUrl={VIDEO_URL} />
            </div>
            <div className={b('sidebar')}>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  ), document.body
);
