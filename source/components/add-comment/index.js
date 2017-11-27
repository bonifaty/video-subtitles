import {h} from 'preact';

import {connect} from 'preact-redux';
import {addComment} from '../../actions';

let AddComment = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addComment(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type='submit'>
          Add Comment
        </button>
      </form>
    </div>
  );
};
AddComment = connect()(AddComment);

export default AddComment;
