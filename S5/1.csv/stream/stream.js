
import {parse, stringify, transform} from 'csv'
import fs from 'fs'

let totalAge = 0;
let rows = 0;

const readable = fs.createReadStream('./sample.csv');
const writable = fs.createWriteStream('./output.csv');

const parser = parse({
    columns: true,
    cast: (value, context) => {
        if (['Height', 'Weight', 'Age'].includes(context.column)) {
            return Number(value);
        }
        return value;
    }
})

const transformer = transform(record => {
    record.BMI = ((record.Weight / record.Height ** 2) * 703).toFixed(2);
    return record;
})

const stringifier = stringify({header: true});

readable
    .pipe(parser)
    .on('data', data => {
        totalAge += data.Age;
        rows++;
    })
    .pipe(transformer)
    .pipe(stringifier)
    .pipe(writable);

parser.on('end', () => {
    console.log(`Average Age: ${(totalAge / rows).toFixed(2)}`);
})