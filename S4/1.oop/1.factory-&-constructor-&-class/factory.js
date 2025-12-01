function createFish(color, maxSpeed, currentSpeed) {
  return {
    color,
    maxSpeed,
    currentSpeed,

    up: function () {
      if (this.currentSpeed < this.maxSpeed) {
        this.currentSpeed++;
      }
      console.log(`Fish is swimming at ${this.currentSpeed} km/h`);
    },
    down: function () {
      if (this.currentSpeed > 0) {
        this.currentSpeed--;
      }
      console.log(`Fish is swimming at ${this.currentSpeed} km/h`);
    },
  };
}

console.clear();
const fish1 = createFish("red", 10, 0);
const fish2 = createFish("blue", 20, 5);

console.log(fish1);
console.log(fish2);
