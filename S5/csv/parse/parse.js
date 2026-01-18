
import {parse} from 'csv'
import {parse as parseSync} from 'csv/sync'
import fs from 'fs'

const input = fs.readFileSync('./test.csv'); //? Without encoding returns a Buffer

//? Async
// parse(input, {
//     comment: '#',
//     columns: true,
//     trim: true
// }, (err, output) => {
//     if (!err) {
//         console.log(output)
//     } else {
//         console.error(err, "asynchronous parsing failed!")
//     }
// })

//? Sync
const res = parseSync(input, {
    comment: '#',
    columns: true,
    trim: true,
    delimiter: ',',
    from: 2,
    to: 2,
    skipEmptyLines: true,
    cast: (value, context) => {
        if (context.column === 'Pages' || context.column === 'Year') {
            return Number(value);
        }
        return value;
    }
})

console.log(res);