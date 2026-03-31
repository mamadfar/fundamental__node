import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "world",
  // rowsAsArray: true, //? Return results as arrays instead of objects --- We can also set this option for each query separately by passing it as an option to the query method
  decimalNumbers: true, //? Return DECIMAL and NEWDECIMAL columns as numbers instead of strings (Default)
});

// connection.query('select * from city limit 2', (err, results, fields) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(results)
//     // console.log('---------------')
//     // console.log(fields) //? Information about the columns of the table
//     // console.log(fields[0]) //? Details about the first column of the table
// })

// connection.query({sql: 'select * from city limit 2', rowsAsArray: true}, (err, results, fields) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(results)
// })

// connection.query('select * from city where Population > ? limit ?', [3_000_000, 3], (err, results, fields) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(results)
// })

//? Promise-based query
const [rows, fields] = await connection
  .promise()
  .query({
    sql: "select * from city where Population > ? limit ?",
    values: [3_000_000, 3],
  });

console.log(rows);