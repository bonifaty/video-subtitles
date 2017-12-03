function pad(num, size) {
  let s = num.toString();
  while (s.length < size) s = '0' + s;
  return s;
}

export const msToImageUrl = (ms) => {
  const imageNumber = pad(Math.floor(ms / 250) + 1, 3);
  return `https://s3.eu-central-1.amazonaws.com/andrewabramov/video/frames/${imageNumber}.jpg`;
};

export const msToString = (msValue, useDotForMs = false) => {
  const hours = msValue / (1000 * 60 * 60);
  const h = pad(Math.floor(hours), 2);

  const minutes = (hours - h) * 60;
  const m = pad(Math.floor(minutes), 2);

  const seconds = (minutes - m) * 60;
  const s = pad(Math.floor(seconds), 2);

  const ms = pad(msValue % 1000, 3);

  return `${h}:${m}:${s}${useDotForMs ? '.' : ':'}${ms}`;
};
