import './video.styl';
import {h, Component} from 'preact';

const b = require('b_').with('video');

class MyComponent extends Component {
  render(props, state) {
    return (<div className={b()}>
      <h1 className={b('title')}>Here comes my video</h1>
      <div className={b('container')}>
        <video controls src='https://www.dropbox.com/s/4zvxcr2ks1oqknp/iceland.mp4?dl=1' />
      </div>
    </div>);
  }
}

export default MyComponent;
