import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'world',
})

// let [rows, fields] = await connection.query('select * from city limit 2')

// console.log(rows)
// console.log(fields)

// let [rows] = await connection.query('select * from city where population > ? limit ?', [3_000_000, 2])
// console.log(rows)

try {
    let [rows] = await connection.query('select * from city2 where population > ? limit ?', [3_000_000, 2])
console.log(rows)
} catch (error) {
    console.log(error.message)
}