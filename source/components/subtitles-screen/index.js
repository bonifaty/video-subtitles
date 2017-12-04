import {h, Component} from 'preact';
import './subtitles-screen.styl';

import SubtitlesList from '../subtitles-list';
import {PlusIcon} from '../../shared/icons';

const b = require('b_').with('subtitles-screen');

class SubtitlesScreen extends Component {
  render({onShowForm}) {
    return (
      <div className={b()}>
        <div className={b('header')}>
          <h2 className={b('header-title')}>Subtitles</h2>
          <div className={b('header-actions')}>
            <button onClick={onShowForm}>
              <PlusIcon className={b('header-add-icon')} />Add</button>
          </div>
        </div>
        <SubtitlesList onEdit={onShowForm} />
      </div>
    );
  }
}

export default SubtitlesScreen;
