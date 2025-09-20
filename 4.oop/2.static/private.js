class Color {
  //? Private fields
  #r = 0;
  #g = 0;
  #b = 0;

  constructor(r = 0, g = 0, b = 0) {
    this.#r = r;
    this.#g = g;
    this.#b = b;
    Object.seal(this);
  }

  //? Setter and Getter must have the same name
  set red(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Red value must be between 0 and 255");
    }
    this.#r = parseInt(value);
  }

  get red() {
    return this.#r;
  }
}

const c1 = new Color(10, 20, 30);

// c1.red = 500;
c1.red = 200;
console.log(c1.red);
c1.r = 100;
console.log(c1.r);
console.log(c1);
