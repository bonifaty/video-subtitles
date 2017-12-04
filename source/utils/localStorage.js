const SUBTITLES_STATE_KEY = 'video-subtitles';

export const loadSubtitles = () => {
  try {
    const storedState = localStorage.getItem(SUBTITLES_STATE_KEY);
    if (storedState) {
      return JSON.parse(storedState);
    } else {
      return undefined;
    }
  } catch (err) {
    return undefined;
  }
};

export const saveSubtitles = (subtitlesState) => {
  if (subtitlesState) {
    localStorage.setItem(SUBTITLES_STATE_KEY, JSON.stringify(subtitlesState));
  }
};
