import './timeline-item.styl';
import {h, Component} from 'preact';

const b = require('b_').with('timeline-item');

class TimelineItem extends Component {
  constructor() {
    super();
    this.state = {
      stylesLeft: 100,
      stylesWidth: 200,
      tempClickStart: 0,
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleRightResizer = this.handleRightResizer.bind(this);
  }
  handleDragStart(event) {
    this.setState({
      tempClickStart: event.offsetX,
    });

    const el = document.createElement('div');
    event.dataTransfer.setDragImage(el, 0, 0);
  }
  handleDrag(event) {
    if (event.clientX !== 0) {
      this.setState({
        stylesLeft: event.x - this.state.tempClickStart,
      });
    }
  }
  handleRightResizer(event) {
    if (event.clientX > 0) {
      this.setState({
        stylesWidth: event.clientX - this.state.stylesLeft,
      });
    }
  }
  render(props, state) {
    return (<div className={b()}
      style={{width: state.stylesWidth + 'px', left: state.stylesLeft + 'px'}}>
      <div className={b('dragger')}
        draggable
        onDragStart={this.handleDragStart}
        onDrag={this.handleDrag} />
      <div className={b('right-res')}
        draggable
        onDrag={this.handleRightResizer} />
    </div>);
  }
}

export default TimelineItem;
