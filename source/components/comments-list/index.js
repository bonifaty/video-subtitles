import {h} from 'preact';
import {connect} from 'preact-redux';

import {msToString, msToImageUrl} from '../../utils/time';

let CommentsList = ({comments}) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h4>{comment.text}</h4>
          <img src={msToImageUrl(comment.inPoint)} width='100' alt='' />
          <div>{msToString(comment.inPoint)}</div>
          <img src={msToImageUrl(comment.outPoint)} width='100' alt='' />
          <div>{msToString(comment.outPoint)}</div>
        </li>
      ))}
    </ul>
  );
};
CommentsList = connect(
  (state) => state
)(CommentsList);

export default CommentsList;
