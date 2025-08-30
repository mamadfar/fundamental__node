let number = 0;

export const next = () => {
  return ++number;
};

export const prev = () => {
  return --number;
};

export const square = () => {
  return number * number;
};

console.log("Module loaded");

export default {
  next,
  prev,
  square,
};
