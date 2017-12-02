import {h} from 'preact';
import {connect} from 'preact-redux';
import './comments-list.styl';

import {msToString, msToImageUrl} from '../../utils/time';
import {deleteComment} from '../../actions';

const b = require('b_').with('comments-list');

// <img src={msToImageUrl(comment.inPoint)} width='100' alt='' />

let CommentsList = ({comments, onDeleteComment}) => {
  console.log(msToImageUrl(249));
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
            <button
              onClick={() => onDeleteComment(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

CommentsList = connect(
  ({comments}) => {
    return {
      comments: comments.sort((a, b) => a.inPoint >= b.inPoint),
    };
  },
  (dispatch) => ({
    onDeleteComment: (id) => {
      dispatch(deleteComment(id));
    },
  })
)(CommentsList);

export default CommentsList;
