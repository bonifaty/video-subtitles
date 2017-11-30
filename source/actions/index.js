const uniqueId = () => Math.random().toString(36).substr(2, 9);
export const addComment = (data) => {
  const {text, inpoint, outpoint} = data;
  return {
    type: 'ADD_COMMENT',
    id: uniqueId(),
    text,
    inpoint,
    outpoint,
  };
};
