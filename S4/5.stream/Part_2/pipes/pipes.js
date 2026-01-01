import fs from 'fs'

//? pipes use the concept of chaining streams together to pass data from one stream to another, like passing the result of one function to the next function in a sequence.

// process.stdin.pipe(process.stdout) //? this will take input from the terminal and immediately output it back to the terminal

// process.stdin.on('data', chunk => {
//     if (chunk.toString().trim() === 'q') {
//         process.exit()
//     }
// }).pipe(process.stdout)

const readable = fs.createReadStream('./a.txt')
const writable = fs.createWriteStream('./b.txt')

readable.pipe(writable)