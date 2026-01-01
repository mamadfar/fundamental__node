import fs from 'fs'
import zlib from 'zlib'
import {Transform} from 'stream'

const zipper = zlib.createGzip() //? in zlib, anything started with create is a stream

console.log(zipper.constructor.name)
console.log(zipper instanceof Transform)

const readable = fs.createReadStream('./a.txt')
const writable = fs.createWriteStream('./zip.gz')

// const readable = fs.createReadStream('./sisu.mkv') //? sisu.mkv was a 6.7gb file
// const writable = fs.createWriteStream('./zip.gz')

readable.pipe(zipper).pipe(writable) //? this will read from a.txt, compress it using gzip and write the compressed data to zip.gz

const unzipper = zlib.createGunzip()

// const readable = fs.createReadStream('./zip.gz')
// const writable = fs.createWriteStream('./unzip.txt')

// readable.pipe(unzipper).pipe(writable)