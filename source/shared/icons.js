import {h} from 'preact';
/* eslint-disable max-len */

export const PlusIcon = ({className}) => {
  return <svg className={className} viewBox='0 0 23 23' width='23' height='23' xmlns='http://www.w3.org/2000/svg'>
    <path d='M10 0h3v10h10v3H13v10h-3V13H0v-3h10z' />
  </svg>;
};

export const BinIcon = ({className}) => {
  return <svg className={className} viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
    <path d='M4 10v20c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V10H4zm6 18H8V14h2v14zm4 0h-2V14h2v14zm4 0h-2V14h2v14zm4 0h-2V14h2v14zM26.5 4H20V1.5c0-.825-.675-1.5-1.5-1.5h-7c-.825 0-1.5.675-1.5 1.5V4H3.5C2.675 4 2 4.675 2 5.5V8h26V5.5c0-.825-.675-1.5-1.5-1.5zM18 4h-6V2.025h6V4z' />
  </svg>;
};

export const PlayIcon = ({className}) => {
  return <svg className={className} version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
    <path d='M6 4l20 12-20 12z' />
  </svg>;
};

export const PauseIcon = ({className}) => {
  return <svg className={className} version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
    <path d='M4 4h10v24h-10zM18 4h10v24h-10z' />
  </svg>;
};


