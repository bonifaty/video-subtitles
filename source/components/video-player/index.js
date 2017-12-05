import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './video-player.styl';

import {subtitlesToWebVttBlobUrl} from '../../utils/webVtt';
import {msToString} from '../../utils/time';

const b = require('b_').with('video-player');

class VideoPlayer extends Component {
  constructor(props) {
    super();
    this.state = {
      isPlaying: false,
      currentTime: 0,
    };
    this.duration = Math.ceil(props.duration * 1000);
    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
  }

  handleTimeUpdate(e) {
    this.setState({
      currentTime: Math.ceil(this._video.currentTime * 1000),
    });
  }

  pauseVideo() {
    this._video.pause();
    this.setState({
      isPlaying: false,
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
    if (this.state.isPlaying) {
      this.pauseVideo();
    }
  }

  render({subtitlesUrl, videoUrl}, {isPlaying, currentTime}) {
    return (<div className={b()}>
      <div className={b('container')}>
        <video controls ref={(c) => this._video = c} src={videoUrl}
          onTimeUpdate={this.handleTimeUpdate}>
          <track default src={subtitlesUrl} />
        </video>
      </div>
      <div className={b('controls')}>
        {msToString(currentTime)} / {msToString(this.duration)}</div>
    </div>);
  }
}

VideoPlayer = connect(
  (state) => {
    return {
      subtitlesUrl: subtitlesToWebVttBlobUrl(state.subtitles),
    };
  }
)(VideoPlayer);

export default VideoPlayer;
