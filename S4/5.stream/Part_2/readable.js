import { Readable } from "stream";

class RandomNumber extends Readable {
  #n = 0;
  #total = 100000;
  _read(size) {
    let str = "";
    if (this.#n >= this.#total) {
      return;
    }
    for (let i = 0; i < size; i++) {
      str += Math.floor(Math.random() * 10);
      this.#n++;
      if (this.#n >= this.#total) {
        break;
      }
    }
    this.push(str);
  }
}

const randomNumber = new RandomNumber();

// console.log(randomNumber.read(10).toString())
// console.log(randomNumber.read(100).toString())

// randomNumber.on('data', chunk => {
//     console.log(`Received ${chunk.length} bytes of data.`)
// })

randomNumber.on('readable', () => {
    let chunk;
    while ((chunk = randomNumber.read(10))) {
        console.log(`Received ${chunk.length} bytes of data.`);
        // console.log(chunk.toString())
    }
})