import {h} from 'preact';

import {connect} from 'preact-redux';

let CommentsList = ({comments}) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );
};
CommentsList = connect(
  (state) => state
)(CommentsList);

export default CommentsList;
