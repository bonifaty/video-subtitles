import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './video-player.styl';

import {commentsToWebVttBlobUrl} from '../../utils/webVtt';
import {msToString} from '../../utils/time';

const videoUrl = 'https://s3.eu-central-1.amazonaws.com/andrewabramov/video/iceland.mp4';

const b = require('b_').with('video-player');

class VideoPlayer extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      currentTime: 0,
    };
    const duration = 144.915737;
    this.duration = Math.ceil(duration * 1000);
    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
  }

  handleTimeUpdate(e) {
    this.setState({
      currentTime: Math.ceil(this._video.currentTime * 1000),
    });
  }

  handlePlayPauseClick() {
    if (this.state.isPlaying) {
      this._video.pause();
    } else {
      this._video.play();
    }
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  }

  updateTimeline(e) {
    this._video.currentTime = e.target.value;
  }

  componentDidMount() {
    // set range input to zero after mount
    this._range.value = 0;
  }

  render({commentsUrl}, {isPlaying, currentTime}) {
    return (<div className={b()}>
      <div className={b('container')}>
        <video ref={(c) => this._video = c} src={videoUrl}
          onTimeUpdate={this.handleTimeUpdate}>
          <track default src={commentsUrl} />
        </video>
      </div>
      <div className={b('controls')}>
        <div><button onClick={this.handlePlayPauseClick}>
          {isPlaying ? 'Pause' : 'Play'}</button>
          {msToString(currentTime)} / {msToString(this.duration)}</div>
        <input ref={(c) => this._range = c}
          className={b('timeline')} type='range'
          onInput={this.updateTimeline}
          min='0' max={this.duration/1000} step='0.001' />
      </div>
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
