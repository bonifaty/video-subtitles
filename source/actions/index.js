let commentId = Math.random().toString(36).substr(2, 9);
export const addComment = (text) => {
  return {
    type: 'ADD_COMMENT',
    id: commentId++,
    text,
  };
};
