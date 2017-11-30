const COMMENTS_STATE_KEY = 'video-comments';

export const loadComments = () => {
  try {
    const storedState = localStorage.getItem(COMMENTS_STATE_KEY);
    if (storedState) {
      return JSON.parse(storedState);
    } else {
      return undefined;
    }
  } catch (err) {
    return undefined;
  }
};

export const saveComments = (commentsState) => {
  if (commentsState) {
    localStorage.setItem(COMMENTS_STATE_KEY, JSON.stringify(commentsState));
  }
};
