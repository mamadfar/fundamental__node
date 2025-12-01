
//? non-flowing mode OR paused mode - data must be explicitly read via stream.read()

import fs from 'fs'

console.clear()

const stream = fs.createReadStream('b.txt')

// stream.on('readable', () => {
//     const chunk = stream.read()

//     if (chunk) {
//         console.log(chunk.length)
//     } else {
//         console.log('null returned!')
//     }
// })

// stream.on('readable', () => {
//     let chunk;
//     while (true) {
//         chunk = stream.read(30000);

//         if (chunk) {
//             console.log(chunk.length);
//         } else {
//             console.log('null returned');
//             break;
//         }
//     }
// })

let total = 0
stream.on('end', () => {
    if (total) console.log('Total bytes read:', total)
    console.log('No more data.')
})

stream.on('readable', () => {
    let chunk

    while (chunk = stream.read()) {
        console.log(chunk.length)
        total += chunk.length
    }
})