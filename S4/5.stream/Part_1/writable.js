
import { Stream, Readable, Writable, Transform, Duplex} from 'stream';
import {EventEmitter} from 'events';
import fs, {WriteStream} from 'fs';

const file = fs.createWriteStream('a.txt')
console.log(file instanceof EventEmitter)
console.log(file instanceof Stream)
console.log(file instanceof Readable)
console.log(file instanceof Writable)
console.log(file instanceof Duplex)
console.log(file instanceof Transform)
console.log(file instanceof WriteStream)

console.log(file.constructor.name)
console.log(Object.getPrototypeOf(file.constructor).name)
console.log(Object.getPrototypeOf(WriteStream).name)
console.log(Object.getPrototypeOf(Writable).name)
console.log(Object.getPrototypeOf(Stream).name)
console.log(Object.getPrototypeOf(EventEmitter).name)

file.write(Buffer.from('Hello '))
file.write('World!\n')

setInterval(() => file.write('Hello World!\n'), 2000);
setInterval(() => file.end('Goodbye World!\n'), 10000);

file.on('finish', () => console.log("Finished"))