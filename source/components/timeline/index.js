import './timeline.wstyl';
import {h, Component} from 'preact';
import TimelineItem from '../../components/timeline-item';

const b = require('b_').with('timeline');

class Timeline extends Component {
  constructor() {
    super();
    this.duration = 144.915737;
    this.state = {
      width: Math.ceil(this.duration * 10),
    };
  }
  render(props, state) {
    return (<div className={b()}>
      <div className={b('track')} style={{width: state.width + 'px'}}>
        <div className={b('item')}>
          <TimelineItem />
          <TimelineItem />
        </div>
      </div>
    </div>);
  }
}

export default Timeline;
