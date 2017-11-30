import './video.styl';
import {h, Component} from 'preact';

const videoUrl = 'https://s3.eu-central-1.amazonaws.com/andrewabramov/video/iceland.mp4';

const b = require('b_').with('video');

class MyComponent extends Component {
  render(props, state) {
    return (<div className={b()}>
      <video controls src={videoUrl} />
    </div>);
  }
}

export default MyComponent;
