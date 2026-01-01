import fs from 'fs'
import {Transform} from 'stream';

class ToUpper extends Transform {

    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

const readable = fs.createReadStream('./a.txt');
const writable = fs.createWriteStream('./upper.txt');

readable.pipe(new ToUpper()).pipe(writable)