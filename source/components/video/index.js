import './video.styl';
import {h, Component} from 'preact';

const b = require('b_').with('video');

class MyComponent extends Component {
  render(props, state) {
    return (<div className={b()}>
      <video controls src='https://www.dropbox.com/s/4zvxcr2ks1oqknp/iceland.mp4?dl=1' />
    </div>);
  }
}

export default MyComponent;
