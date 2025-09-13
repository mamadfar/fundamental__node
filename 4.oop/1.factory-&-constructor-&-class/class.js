class Fish {
  constructor(color, maxSpeed, currentSpeed) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;
  }

  up() {
    if (this.currentSpeed < this.maxSpeed) {
      this.currentSpeed++;
    }
    console.log(`Fish is swimming at ${this.currentSpeed} km/h`);
  }
  down() {
    if (this.currentSpeed > 0) {
      this.currentSpeed--;
    }
    console.log(`Fish is swimming at ${this.currentSpeed} km/h`);
  }
}

console.clear();
const fish1 = new Fish("red", 10, 0);
const fish2 = new Fish("blue", 20, 5);
console.log(fish1);
console.log(fish2);
