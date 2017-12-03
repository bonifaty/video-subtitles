import {h, Component} from 'preact';

import {connect} from 'preact-redux';
import {addComment} from '../../actions';

import TimeInput from '../time-input';

import './add-comment.styl';
const b = require('b_').with('add-comment');

class AddComment extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      inpoint: 0,
      outpoint: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextUpdate = this.handleTextUpdate.bind(this);
    this.handleInpointUpdate = this.handleInpointUpdate.bind(this);
    this.handleOutpointUpdate = this.handleOutpointUpdate.bind(this);
  }

  handleTextUpdate(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleInpointUpdate(ms) {
    this.setState({
      inpoint: ms,
    });
  }

  handleOutpointUpdate(ms) {
    this.setState({
      outpoint: ms,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addComment(this.state));
    this._form.reset();
    this.props.onCloseForm();
  }

  render({onCloseForm}, {text, inpoint, outpoint}) {
    return <div className={b()}>
      <button onClick={onCloseForm}>Back</button>
      <form ref={(c) => this._form = c} onSubmit={this.handleSubmit}>
        <div>
          <label>Comment</label>
          <div>
            <textarea onInput={this.handleTextUpdate} name='text' required />
          </div>
        </div>
        <div>
          <label>Inpoint</label>
          <div>
            <TimeInput value={inpoint} onUpdate={this.handleInpointUpdate} />
          </div>
        </div>
        <div>
          <label>Outpoint</label>
          <div>
            <TimeInput value={outpoint} onUpdate={this.handleOutpointUpdate} />
          </div>
        </div>
        <button type='submit'>Go</button>
      </form>
    </div>;
  }
}

AddComment = connect()(AddComment);

export default AddComment;
