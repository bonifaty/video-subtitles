import {h, Component} from 'preact';

import {connect} from 'preact-redux';
import {addComment} from '../../actions';

import TimeInput from '../time-input';

import './add-comment.styl';
const b = require('b_').with('add-comment');

class AddComment extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    for (let i=0; i < this._form.elements.length; i++) {
      const formEle = this._form.elements[i];
      formData[formEle.name] = formEle.value;
    }
    this.props.dispatch(addComment(formData));
    this._form.reset();
    this.props.onCloseForm();
  }

  render({onCloseForm}, state) {
    return <div className={b()}>
      <button onClick={onCloseForm}>Back</button>
      <form ref={(c) => this._form = c} onSubmit={this.handleSubmit}>
        <div hidden>
          <label>Comment</label>
          <div>
            <textarea name='text' required />
          </div>
        </div>
        <div>
          <label>Inpoint</label>
          <div>
            <TimeInput />
          </div>
        </div>
        <div hidden>
          <label>Outpoint</label>
          <div>
            <input name='outpoint' required type='text' />
          </div>
        </div>
        <button type='submit'>Go</button>
      </form>
    </div>;
  }
}

AddComment = connect()(AddComment);

export default AddComment;
