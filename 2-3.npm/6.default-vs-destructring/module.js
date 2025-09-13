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

// module.exports = { next, prev, square };

export { next, prev, square };

// export default { next, prev, square };

export default function cube() {
  return number * number * number;
}
