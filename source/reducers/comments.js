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
    default:
      return state;
  }
};

export default comments;
