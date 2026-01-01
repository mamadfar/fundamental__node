
//? Flowing mode - data is read automatically and provided via 'data' events
//! In this mode, we can't use limitations on chunk size like we did with stream.read(n)

import fs from 'fs'

const stream = fs.createReadStream('b.txt')

stream.on('data', chunk => {
    console.log(chunk.length)
})

stream.on('end', () => {
    console.log('No more data.')
})