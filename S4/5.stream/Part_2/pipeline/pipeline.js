import fs from 'fs'
import {createGzip} from 'zlib'
import {pipeline} from 'stream'

const readable = fs.createReadStream('./a.txt')
const writable = fs.createWriteStream('./zip.gz')
const zipper = createGzip()

// pipeline(readable, zipper, writable, err => {
//     if (err) {
//         console.error('Pipeline failed.', err)
//     } else {
//         console.log('Pipeline succeeded.')
//     }
// })

import {pipeline as pipelinePromise} from 'stream/promises'

async function main() {
    try {
        await pipelinePromise(readable, zipper, writable)
        console.log('Pipeline succeeded.')
    } catch (err) {
        console.error('Pipeline failed.', err)
    }
}

main()