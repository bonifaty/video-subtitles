import {h, Component} from 'preact';

import {connect} from 'preact-redux';
import {addSubtitle, updateSubtitle} from '../../actions';

import TimeInput from '../time-input';

import './form.styl';
const b = require('b_').with('form');

class EditForm extends Component {
  constructor({item}) {
    super();
    this.state = {
      text: item ? item.text : '',
      inPoint: item ? item.inPoint : 0,
      outPoint: item ? item.outPoint : 0,
      title: item ? 'Edit subtitle' : 'New subtitle',
      submitText: item ? 'Save subtitle' : 'Add subtitle',
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
      inPoint: ms,
    });
  }

  handleOutpointUpdate(ms) {
    this.setState({
      outPoint: ms,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {item, dispatch, onHideForm} = this.props;
    if (item) {
      const {text, inPoint, outPoint} = this.state;
      dispatch(updateSubtitle({
        id: item.id,
        text, inPoint, outPoint,
      }));
    } else {
      dispatch(addSubtitle(this.state));
    }
    onHideForm();
  }

  render({onHideForm}, {title, text, inPoint, outPoint, submitText}) {
    return <div className={b()}>
      <div>{title}</div>
      <button onClick={onHideForm}>Back</button>
      <form ref={(c) => this._form = c} onSubmit={this.handleSubmit}>
        <div>
          <label>Subtitle</label>
          <div>
            <textarea onInput={this.handleTextUpdate}
              name='text' value={text} required />
          </div>
        </div>
        <div>
          <label>Inpoint</label>
          <div>
            <TimeInput value={inPoint} onUpdate={this.handleInpointUpdate} />
          </div>
        </div>
        <div>
          <label>Outpoint</label>
          <div>
            <TimeInput value={outPoint} onUpdate={this.handleOutpointUpdate} />
          </div>
        </div>
        <button type='submit'>{submitText}</button>
      </form>
    </div>;
  }
}

const mapStateToProps = ({subtitles}, ownProps) => ({
  item: ownProps.id ? subtitles.find((el) => el.id === ownProps.id) : null,
});

EditForm = connect(mapStateToProps)(EditForm);

export default EditForm;
