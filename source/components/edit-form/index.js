import {h, Component} from 'preact';

import {connect} from 'preact-redux';
import {addSubtitle, updateSubtitle, deleteSubtitle} from '../../actions';

import TimeInput from '../time-input';
import {BackIcon} from '../../shared/icons';

import './edit-form.styl';
const b = require('b_').with('edit-form');

class EditForm extends Component {
  constructor({item}) {
    super();
    this.state = {
      text: item ? item.text : '',
      inPoint: item ? item.inPoint : 0,
      outPoint: item ? item.outPoint : 1100,
      title: item ? 'Edit Subtitle' : 'New Subtitle',
      submitText: item ? 'Save Subtitle' : 'Add Subtitle',
      showDelete: !!item,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextUpdate = this.handleTextUpdate.bind(this);
    this.handleInpointUpdate = this.handleInpointUpdate.bind(this);
    this.handleOutpointUpdate = this.handleOutpointUpdate.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
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

  handleDeleteClick(id) {
    const {dispatch, onHideForm} = this.props;
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteSubtitle(id));
      onHideForm();
    }
  }

  render({onHideForm, item},
    {title, text, inPoint, outPoint, submitText, showDelete}) {
    return <div className={b()}>
      <div className={b('header')}>
        <button className={b('header-back-button')} onClick={onHideForm}>
          <BackIcon className={b('header-back-icon')} /></button>
        <h2 className={b('header-title')}>{title}</h2>
      </div>
      <form className={b('form')}
        ref={(c) => this._form = c} onSubmit={this.handleSubmit}>
        <div className={b('form-row', {time: true})}>
          <div className={b('form-row-part')}>
            <label className={b('label')}>From</label>
            <div>
              <TimeInput value={inPoint} onUpdate={this.handleInpointUpdate} />
            </div>
          </div>
          <div className={b('form-row-part')}>
            <label className={b('label')}>To</label>
            <div>
              <TimeInput value={outPoint}
                onUpdate={this.handleOutpointUpdate} />
            </div>
          </div>
        </div>
        <div className={b('form-row')}>
          <label className={b('label')}>Subtitle text</label>
          <div>
            <textarea className={b('text')} rows='4'
              onInput={this.handleTextUpdate}
              placeholder='Please enter subtitle text'
              name='text' value={text} required />
          </div>
        </div>
        <div className={'actions'}>
          <button className={b('button')} type='submit'>{submitText}</button>
          {showDelete ?
            <button className={b('button', {delete: true})} type='button'
              onClick={() => this.handleDeleteClick(item.id)}>
            Delete</button> : ''}
        </div>
      </form>
    </div>;
  }
}

const mapStateToProps = ({subtitles}, ownProps) => ({
  item: ownProps.id ? subtitles.find((el) => el.id === ownProps.id) : null,
});

EditForm = connect(mapStateToProps)(EditForm);

export default EditForm;
