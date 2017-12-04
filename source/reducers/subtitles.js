const subtitles = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SUBTITLE':
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
    case 'DELETE_SUBTITLE':
      return state.filter((subtitle) => {
        return subtitle.id !== action.id;
      });
      break;
    default:
      return state;
  }
};

export default subtitles;
