let number = 0;

const next = () => {
  return ++number;
};

const prev = () => {
  return --number;
};

const square = () => {
  return number * number;
};

module.exports = { next, prev, square };
