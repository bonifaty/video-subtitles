import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './subtitles-list.styl';

import {msToString} from '../../utils/time';
import {deleteSubtitle} from '../../actions';

import {PlusIcon} from '../../shared/icons';

import AddSubtitle from '../add-subtitle';

const b = require('b_').with('subtitles-list');

class SubtitlesList extends Component {
  constructor() {
    super();
    this.state = {
      showAddSubtitleForm: false,
    };

    this.showAddSubtitleForm = this.showAddSubtitleForm.bind(this);
    this.hideAddSubtitleForm = this.hideAddSubtitleForm.bind(this);
  }

  showAddSubtitleForm() {
    this.setState({
      showAddSubtitleForm: true,
    });
  }

  hideAddSubtitleForm() {
    this.setState({
      showAddSubtitleForm: false,
    });
  }

  renderSubtitles(subtitles, onDeleteSubtitle) {
    return <ul className={b('list-container')}>
      {subtitles.map((subtitle) => (
        <li className={b('item')} key={subtitle.id}>
          <div className={b('time-range')}>
            <div className={b('time-range-part')}>
              <div className={b('time-range-label')}>From</div>
              <div className={b('time-range-value')}>
                {msToString(subtitle.inPoint)}
              </div>
            </div>
            <div className={b('time-range-part')}>
              <div className={b('time-range-label')}>To</div>
              <div className={b('time-range-value')}>
                {msToString(subtitle.outPoint)}
              </div>
            </div>
            <div className={b('time-range-part')}>
              <div>
                <button>Edit</button>
                <button
                  onClick={() => onDeleteSubtitle(subtitle.id)}>Delete</button>
              </div>
            </div>
          </div>
          <div className={b('subtitle-text')}>{subtitle.text}</div>
        </li>
      ))}
    </ul>;
  }

  render({subtitles, onDeleteSubtitle}, {showAddSubtitleForm}) {
    return (
      <div className={b()}>
        <div className={b('add-new', {visible: showAddSubtitleForm})}>
          <AddSubtitle onCloseForm={this.hideAddSubtitleForm} />
        </div>
        <div className={b('header')}>
          <h2 className={b('header-title')}>Subtitles</h2>
          <div className={b('header-actions')}>
            <button onClick={this.showAddSubtitleForm}>
              <PlusIcon className={b('header-add-icon')} />Add</button>
          </div>
        </div>
        {subtitles.length > 0 ?
          this.renderSubtitles(subtitles, onDeleteSubtitle) :
          'No subtitles yet'}
      </div>
    );
  }
}

SubtitlesList = connect(
  ({subtitles}) => {
    return {
      subtitles: subtitles
        .sort((a, b) => a.outPoint >= b.outPoint)
        .sort((a, b) => a.inPoint >= b.inPoint),
    };
  },
  (dispatch) => ({
    onDeleteSubtitle: (id) => {
      dispatch(deleteSubtitle(id));
    },
  })
)(SubtitlesList);

export default SubtitlesList;
