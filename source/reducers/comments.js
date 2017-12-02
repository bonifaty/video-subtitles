const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          inPoint: action.inpoint,
          outPoint: action.outpoint,
        },
      ];
      break;
    case 'DELETE_COMMENT':
      return state.filter((comment) => {
        return comment.id !== action.id;
      });
      break;
    default:
      return state;
  }
};

export default comments;
