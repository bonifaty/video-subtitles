import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './video.styl';

const videoUrl = 'https://s3.eu-central-1.amazonaws.com/andrewabramov/video/iceland.mp4';

const b = require('b_').with('video');

class VideoPlayer extends Component {
  render(props, state) {
    return (<div className={b()}>
      <video controls src={videoUrl} />
      <video controls autoplay src={videoUrl}>
        <track default src={props.commentsUrl} />
      </video>
    </div>);
  }
}

VideoPlayer = connect(
  (state) => state
)(VideoPlayer);

export default VideoPlayer;
