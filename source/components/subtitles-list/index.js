import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './subtitles-list.styl';

import {msToString} from '../../utils/time';
import {deleteSubtitle} from '../../actions';

import {EditIcon, BinIcon} from '../../shared/icons';

const b = require('b_').with('subtitles-list');

class SubtitlesList extends Component {
  editSubtitle(id) {
    this.props.onEdit(id);
  }

  renderSubtitles(subtitles, onDelete) {
    return <ul className={b()}>
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
            <div className={b('actions')}>
              <button className={b('action-button')}
                onClick={() => this.editSubtitle(subtitle.id)}>
                <EditIcon className={b('action-icon')} />
                Edit</button>
              <button className={b('action-button')}
                onClick={() => onDelete(subtitle.id)}>
                <BinIcon className={b('action-icon', {delete: true})} />
              </button>
            </div>
          </div>
          <div className={b('subtitle-text')}>{subtitle.text}</div>
        </li>
      ))}
    </ul>;
  }

  render({subtitles, onDelete}) {
    return subtitles.length > 0 ?
      this.renderSubtitles(subtitles, onDelete) :
      <div className={b('empty-list')}>
        You don't have any subtitles yet
      </div>;
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
    onDelete: (id) => {
      if (window.confirm('Are you sure you want to delete this item?')) {
        dispatch(deleteSubtitle(id));
      }
    },
  })
)(SubtitlesList);

export default SubtitlesList;
