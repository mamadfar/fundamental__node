class Color {
  //? Private fields
  #r = 0;
  #g = 0;
  #b = 0;
  //? Public field
  p = 2;
  static s = 3; //? Static field
  static #t = 4; //? Static private field

  constructor(r = 0, g = 0, b = 0) {
    this.#r = r;
    this.#g = g;
    this.#b = b;
    this.p = 5; //? This is called Property
    Object.seal(this);
  }

  //? Setter and Getter must have the same name
  set r(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Red value must be between 0 and 255");
    }
    this.#r = parseInt(value);
  }

  get r() {
    return this.#r;
  }
  #reset() {
    this.#r = 0;
    this.#g = 0;
    this.#b = 0;
  }
  //? Static method to access static private field
  static getT() {
    return this.#t;
  }
}

const c1 = new Color(10, 20, 30);

// c1.r = 500;
c1.r = 200;
console.log(c1.r);
c1.r = 100;
console.log(c1.r);
console.log(c1);
console.log(Color.s);
console.log(Color.getT());
