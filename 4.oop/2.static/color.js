import util from "util";

class Color {
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

  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b}) - To string method`;
  }

  [util.inspect.custom]() {
    return `rgb(${this.r}, ${this.g}, ${this.b}) - Inspect custom method`;
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
