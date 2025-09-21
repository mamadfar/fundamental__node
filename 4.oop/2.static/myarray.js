class MyArray extends Array {
  shuffle() {
    for (let i = 0; i < this.length; i++) {
      const i = Math.floor(Math.random() * this.length);
      const j = Math.floor(Math.random() * this.length);

      [this[i], this[j]] = [this[j], this[i]];
      //? Swapping
      // const temp = this[i];
      // this[i] = this[j];
      // this[j] = temp;
    }
  }
}

const m1 = new MyArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log(m1);
m1.shuffle();
console.log(m1);
