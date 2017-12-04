const uniqueId = () => Math.random().toString(36).substr(2, 9);
export const addSubtitle = (data) => {
  const {text, inpoint, outpoint} = data;
  return {
    type: 'ADD_SUBTITLE',
    id: uniqueId(),
    text,
    inpoint,
    outpoint,
  };
};

export const deleteSubtitle = (id) => {
  return {
    type: 'DELETE_SUBTITLE',
    id,
  };
};
