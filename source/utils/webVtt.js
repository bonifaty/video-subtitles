import {msToString} from './time';

export const subtitlesToWebVttBlobUrl = (subtitles) => {
  let webVttText = `WEBVTT\r\n\r\n`;

  if (subtitles) {
    subtitles.forEach((subtitle) => {
      webVttText += `${msToString(subtitle.inPoint, true)} ` +
        `--> ${msToString(subtitle.outPoint, true)}
${subtitle.text}\r\n\r\n`;
    });
  }
  const blob = new Blob([webVttText], {
    type: 'text/vtt',
  });
  return window.URL.createObjectURL(blob);
};
