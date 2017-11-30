import {h, Component} from 'preact';

import {connect} from 'preact-redux';
import {addComment} from '../../actions';

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
  }

  render(props, state) {
    return <div>
      <form ref={(c) => this._form = c} onSubmit={this.handleSubmit}>
        <div>
          <label>Comment</label>
          <div>
            <textarea name='text' required />
          </div>
        </div>
        <div>
          <label>Inpoint</label>
          <div>
            <input name='inpoint' required type='text' />
          </div>
        </div>
        <div>
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
