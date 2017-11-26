import './timeline-item.styl';
import {h, Component} from 'preact';

const b = require('b_').with('timeline-item');

class TimelineItem extends Component {
  constructor() {
    super();
    this.state = {
      stylesLeft: '200px',
      stylesWidth: '100px',
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
    event.dataTransfer.setData('Text', '1');
  }
  handleDrag(event) {
    if (event.clientX !== 0) {
      this.setState({
        stylesLeft: event.clientX - this.state.tempClickStart + 'px',
      });
    }
  }
  handleRightResizer(event) {
    if (event.clientX > 0) {
      this.setState({
        stylesWidth: event.clientX - parseInt(this.state.stylesLeft) + 'px',
      });
    }
  }
  render(props, state) {
    return (<div className={b()}
      style={{width: state.stylesWidth, left: state.stylesLeft}}>
      <div className={b('dragger')}
        draggable
        onDragStart={this.handleDragStart}
        onDrag={this.handleDrag} />
      <div className={b('right-res')}
        draggable
        onDragStart={this.handleDragStart}
        onDrag={this.handleRightResizer} />
    </div>);
  }
}

export default TimelineItem;
