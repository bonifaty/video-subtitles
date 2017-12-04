import constants from '../actions/constants';

const subtitles = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_SUBTITLE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          inPoint: action.inPoint,
          outPoint: action.outPoint,
        },
      ];
      break;
    case constants.DELETE_SUBTITLE:
      return state.filter((subtitle) => {
        return subtitle.id !== action.id;
      });
      break;
    case constants.UPDATE_SUBTITLE:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            id: action.id,
            text: action.text,
            inPoint: action.inPoint,
            outPoint: action.outPoint,
          };
        } else {
          return item;
        }
      });
      break;
    default:
      return state;
  }
};

export default subtitles;
