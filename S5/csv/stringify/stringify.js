
import {stringify} from 'csv'
import {stringify as stringifySync} from 'csv/sync'

const data = [
    ["1", "2", "3", "4"],
    ["a", "b", "c", "d"],
    ["\n", '"', ',', "'"]
]

//? Async
// stringify(data, {}, (err, output) => {
//     if (!err) {
//         console.log(output)
//     } else {
//         console.error(err, "asynchronous stringifying failed!")
//     }
// })

//? Sync
const res = stringifySync(data, {
    columns: ['Col1', 'Col2', 'Col3', 'Col4'],
    header: true,
    delimiter: ':'
})

console.log(res)

const data2 = [
    {name: "John", age: 30, city: "New York"},
    {name: "Anna", age: 22, city: "London"},
    {name: "Mike", age: 32, city: "Chicago"}
]

const res2 = stringifySync(data2, {
    header: true,
})

console.log(res2)