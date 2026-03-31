import mysql from 'mysql2/promise'

const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'world',
})

export default conn;