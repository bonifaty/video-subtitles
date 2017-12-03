import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './comments-list.styl';

import {msToString} from '../../utils/time';
import {deleteComment} from '../../actions';

import AddComment from '../add-comment';

const b = require('b_').with('comments-list');

class CommentsList extends Component {
  constructor() {
    super();
    this.state = {
      showAddCommentForm: true,
    };

    this.showAddCommentForm = this.showAddCommentForm.bind(this);
    this.hideAddCommentForm = this.hideAddCommentForm.bind(this);
  }

  showAddCommentForm() {
    this.setState({
      showAddCommentForm: true,
    });
  }

  hideAddCommentForm() {
    this.setState({
      showAddCommentForm: false,
    });
  }

  renderComments(comments, onDeleteComment) {
    return <ul className={b('list-container')}>
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
    </ul>;
  }

  render({comments, onDeleteComment}, {showAddCommentForm}) {
    return (
      <div className={b()}>
        <div className={b('add-new', {visible: showAddCommentForm})}>
          <AddComment onCloseForm={this.hideAddCommentForm} />
        </div>
        <div className={b('header')}>
          <div className={b('header-actions')}>
            <button onClick={this.showAddCommentForm}>Add</button>
          </div>
          <h2>Comments</h2>
        </div>
        {comments.length > 0 ?
          this.renderComments(comments, onDeleteComment) : 'No comments yet'}
      </div>
    );
  }
}

CommentsList = connect(
  ({comments}) => {
    return {
      comments: comments
        .sort((a, b) => a.outPoint >= b.outPoint)
        .sort((a, b) => a.inPoint >= b.inPoint),
    };
  },
  (dispatch) => ({
    onDeleteComment: (id) => {
      dispatch(deleteComment(id));
    },
  })
)(CommentsList);

export default CommentsList;
