console.clear();

//? It's a best practice to have one class in one file
//? and the file name should be the same as the class name

import Color from "./color.js";
import util from "util";

//? Inheritance - Color with transparency, like this --> rgba(255, 0, 0, 0.5)
class TColor extends Color {
  #a = 1; //? Alpha channel
  constructor(r = 0, g = 0, b = 0, a = 1) {
    super(r, g, b); //? Call the parent class constructor
    this.a = a; //? Use the setter to validate
  }

  set a(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#a = Math.round(parseFloat(value) * 1000) / 1000; //? Round to 3 decimal places
  }

  get a() {
    return this.#a;
  }
  static fromHex(hex) {
    const regex = new RegExp("^([0-9a-f]{6})|([0-9a-f]{8})$", "i");
    if (!regex.test(hex)) {
      throw new Error("Invalid hex color: " + hex);
    }
    if (hex.length === 6) {
      return new TColor(
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16)
      );
    } else {
      return new TColor(
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
        parseInt(hex.slice(6, 8), 16) / 255
      );
    }
  }

  [util.inspect.custom]() {
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
  //? We can override accessor methods. but we can't access to private fields of parent class (super class)
}

const tc1 = new TColor(10, 20, 30);
console.log(tc1);

tc1.a = 0.92341234;
console.log(tc1);

// const tc2 = TColor.fromHex("aabce");
// console.log(tc2);
const tc3 = TColor.fromHex("aabbccdd");
console.log(tc3);
console.log(tc3.r, tc3.g, tc3.b, tc3.a);
