import './time-input.styl';
import {h, Component} from 'preact';
import {pad, timeToMs} from '../../utils/time';

const b = require('b_').with('time-input');
const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

class TimeInput extends Component {
  constructor() {
    super();
    this.state = {
      hours: '00',
      minutes: '00',
      seconds: '00',
      millis: '000',
    };

    this.onInput = this.onInput.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onInput(e) {
    let nextValue;
    switch (e.target.name) {
      case 'h':
        nextValue = this.state.hours;
        break;
      case 'm':
        nextValue = this.state.minutes;
        break;
      case 's':
        nextValue = this.state.seconds;
        break;
      case 'ms':
        nextValue = this.state.millis;
        break;
      default:
        break;
    }
    const maxLength = e.target.name === 'ms' ? 3 : 2;
    if (!e.data ||
      DIGITS.indexOf(e.data)>=0 && e.target.value.length <= maxLength) {
      nextValue = e.target.value;
    }

    switch (e.target.name) {
      case 'h':
        this.setState({
          hours: nextValue,
        });
        break;
      case 'm':
        this.setState({
          minutes: nextValue,
        });
        break;
      case 's':
        this.setState({
          seconds: nextValue,
        });
        break;
      case 'ms':
        this.setState({
          millis: nextValue,
        });
        break;
      default:
        break;
    }

    const {hours, minutes, seconds, millis} = this.state;
    console.log(timeToMs(parseInt(hours), parseInt(minutes),
      parseInt(seconds), parseInt(millis)));
  }
  onFocus(e) {
    e.target.setSelectionRange(0, e.target.value.length);
  }
  onBlur(e) {
    let {hours, minutes, seconds, millis} = this.state;
    switch (e.target.name) {
      case 'h':
        this.setState({
          hours: pad(hours, 2),
        });
        break;
      case 'm':
        minutes = parseInt(minutes) > 59 ? 59 : minutes;
        this.setState({
          minutes: pad(minutes, 2),
        });
        break;
      case 's':
        seconds = parseInt(seconds) > 59 ? 59 : seconds;
        this.setState({
          seconds: pad(seconds, 2),
        });
        break;
      case 'ms':
        this.setState({
          millis: pad(millis, 3),
        });
        break;
      default:
        break;
    }
  }
  render(props, {hours, minutes, seconds, millis}) {
    return (<div className={b()}>
      <input name='h' value={hours} className={b('part-control')}
        onInput={this.onInput} onFocus={this.onFocus} onBlur={this.onBlur}
        size='2' placeholder='00' />:
      <input name='m' value={minutes} className={b('part-control')}
        onInput={this.onInput} onFocus={this.onFocus} onBlur={this.onBlur}
        size='2' placeholder='00' />:
      <input name='s' value={seconds} className={b('part-control')}
        onInput={this.onInput} onFocus={this.onFocus} onBlur={this.onBlur}
        size='2' placeholder='00' />:
      <input name='ms' value={millis} className={b('part-control', {ms: true})}
        onInput={this.onInput} onFocus={this.onFocus} onBlur={this.onBlur}
        size='3' placeholder='000' />
    </div>);
  }
}

export default TimeInput;
