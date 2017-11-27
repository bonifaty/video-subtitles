const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          inPoint: 0,
          outPoint: 10000,
        },
      ];
    default:
      return state;
  }
};

export default comments;
