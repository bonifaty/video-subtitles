import {h} from 'preact';
import {connect} from 'preact-redux';
import './comments-list.styl';

import {msToString, msToImageUrl} from '../../utils/time';

const b = require('b_').with('comments-list');

// <img src={msToImageUrl(comment.inPoint)} width='100' alt='' />

let CommentsList = ({comments}) => {
  console.log(msToImageUrl(123));
  return (
    <div className={b()}>
      <div className={b('header')}>
        <h2>Comments</h2>
        <button>Add new comment</button>
      </div>
      <ul>
        {comments.map((comment) => (
          <li className={b('item')} key={comment.id}>
            <div className={b('time-range')}>
              <span>{msToString(comment.inPoint)}</span> ...
              <span>{msToString(comment.outPoint)}</span>
            </div>

            <div className={b('comment-text')}>{comment.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
CommentsList = connect(
  (state) => state
)(CommentsList);

export default CommentsList;
