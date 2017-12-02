import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './video-player.styl';

import {commentsToWebVttBlobUrl} from '../../utils/webVtt';

const videoUrl = 'https://s3.eu-central-1.amazonaws.com/andrewabramov/video/iceland.mp4';

const b = require('b_').with('video-player');

class VideoPlayer extends Component {
  render({commentsUrl}) {
    return (<div className={b()}>
      <video controls src={videoUrl}>
        <track default src={commentsUrl} />
      </video>
    </div>);
  }
}

VideoPlayer = connect(
  (state) => {
    return {
      commentsUrl: commentsToWebVttBlobUrl(state.comments),
    };
  }
)(VideoPlayer);

export default VideoPlayer;
