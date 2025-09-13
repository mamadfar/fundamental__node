function Fish(color, maxSpeed, currentSpeed) {
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.currentSpeed = currentSpeed;
  this.up = function () {
    if (this.currentSpeed < this.maxSpeed) {
      this.currentSpeed++;
    }
    console.log(`Fish is swimming at ${this.currentSpeed} km/h`);
  };
  this.down = function () {
    if (this.currentSpeed > 0) {
      this.currentSpeed--;
    }
    console.log(`Fish is swimming at ${this.currentSpeed} km/h`);
  };
}

console.clear();
//! Caveat: Every time we create a new Fish, all methods are recreated in memory
const fish1 = new Fish("red", 10, 0);
const fish2 = new Fish("blue", 20, 5);

console.log(fish1);
console.log(fish2);
console.log("---");
console.log(fish1 instanceof Fish);
console.log(fish1 instanceof Array);
console.log(fish1 instanceof Object);
