import constants from './constants';

const uniqueId = () => Math.random().toString(36).substr(2, 9);
export const addSubtitle = (data) => {
  const {text, inPoint, outPoint} = data;
  return {
    type: constants.ADD_SUBTITLE,
    id: uniqueId(),
    text,
    inPoint,
    outPoint,
  };
};

export const updateSubtitle = (data) => {
  const {id, text, inPoint, outPoint} = data;
  return {
    type: constants.UPDATE_SUBTITLE,
    id,
    text,
    inPoint,
    outPoint,
  };
};

export const deleteSubtitle = (id) => {
  return {
    type: constants.DELETE_SUBTITLE,
    id,
  };
};
