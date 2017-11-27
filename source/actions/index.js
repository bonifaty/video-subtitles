let commentId = 0;
export const addComment = (text) => {
  return {
    type: 'ADD_COMMENT',
    id: commentId++,
    text,
  };
};
