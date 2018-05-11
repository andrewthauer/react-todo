// Util functions

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const makeClasses = (...classes) => classes.filter(i => Boolean(i)).join(' ');

export const makeProps = (settings, defaults?) => Object.assign({}, defaults, settings);
