import {msToString} from './time';

export const commentsToWebVttBlobUrl = (comments) => {
  let webVttText = `WEBVTT\r\n\r\n`;

  comments.forEach((comment) => {
    webVttText +=
      `${msToString(comment.inPoint)} --> ${msToString(comment.outPoint)}
${comment.text}\r\n\r\n`;
  });
  const blob = new Blob([webVttText], {
    type: 'text/vtt',
  });
  return window.URL.createObjectURL(blob);
};