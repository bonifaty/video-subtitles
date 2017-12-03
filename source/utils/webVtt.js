import {msToString} from './time';

export const commentsToWebVttBlobUrl = (comments) => {
  let webVttText = `WEBVTT\r\n\r\n`;

  if (comments) {
    comments.forEach((comment) => {
      webVttText +=
`${msToString(comment.inPoint, true)} --> ${msToString(comment.outPoint, true)}
${comment.text}\r\n\r\n`;
    });
  }
  const blob = new Blob([webVttText], {
    type: 'text/vtt',
  });
  return window.URL.createObjectURL(blob);
};
