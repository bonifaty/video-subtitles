function pad(num, size) {
  let s = num.toString();
  while (s.length < size) s = '0' + s;
  return s;
}

export const msToImageUrl = (ms) => {
  const imageNumber = pad(Math.floor(ms / 250) + 1, 3);
  return `https://s3.eu-central-1.amazonaws.com/andrewabramov/video/frames/${imageNumber}.jpg`;
};

export const msToString = (ms) => {
  const hours = ms / (1000*60*60);
  const h = Math.floor(hours);

  const minutes = (hours - h) * 60;
  const m = Math.floor(minutes);

  const seconds = (minutes - m) * 60;
  const s = Math.floor(seconds);

  const mss = ms % 1000;

  return pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(mss, 3);
};
