import util from "util";

export default class Color {
  #r = 0;
  #g = 0;
  #b = 0;
  constructor(r = 0, g = 0, b = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  static fromHex(hex) {
    const regex = new RegExp("^[0-9a-f]{6}$", "i");
    if (!regex.test(hex)) {
      throw new Error("Invalid hex color: " + hex);
    }
    return new Color(
      parseInt(hex.slice(0, 2), 16), //* 16 means hexadecimal and it's base 16 and it will convert to base 10
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16)
    );
  }

  set r(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Red value must be between 0 and 255");
    }
    this.#r = parseInt(value);
  }

  get r() {
    return this.#r;
  }

  set g(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Green value must be between 0 and 255");
    }
    this.#g = parseInt(value);
  }
  get g() {
    return this.#g;
  }
  set b(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Blue value must be between 0 and 255");
    }
    this.#b = parseInt(value);
  }
  get b() {
    return this.#b;
  }

  static fromHex(hex) {
    const regex = new RegExp("^[0-9a-f]{6}$", "i");
    if (!regex.test(hex)) {
      throw new Error("Invalid hex color: " + hex);
    }
    return new Color(
      parseInt(hex.slice(0, 2), 16), //* 16 means hexadecimal and it's base 16 and it will convert to base 10
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16)
    );
  }

  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b}) - To string method`;
  }

  [util.inspect.custom]() {
    return `rgb(${this.r}, ${this.g}, ${this.b}) - util.inspect custom method`;
  }
}

const c1 = new Color();
const c2 = new Color(20, 34, 222);

console.log(c1);
console.log(c2);

const c4 = Color.fromHex("ff00ff");
console.log(c4);
// const c3 = Color.fromHex("33");
// console.log(c3);

console.log(c1.toString());
console.log(c1 + ""); //? JS will call toString method automatically when we try to concatenate an object with a string
console.log(c1);
