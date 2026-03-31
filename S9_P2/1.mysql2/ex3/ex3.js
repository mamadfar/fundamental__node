
import conn from './db.js'

let results

try {
    [results] = await conn.query(`insert into city(name, countrycode, district, population)
    values('Tehran', 'IRN', 'Tehran', 9000000)`)
console.log(results)
} catch (error) {
    console.log(error.message)
}

try {
[results] = await conn.query(`select last_insert_id() as id`)
console.log(results)
} catch (error) {
    console.log(error.message)
}

try {
    const [results] = await conn.query(`update city set district = 'Teheran' where district = 'Tehran'`)
console.log(results)
} catch (error) {
    console.log(error.message)
}

// try {
//     [results] = await conn.query(`delete from city where id > 4080 limit 2`)
// console.log(results)
// } catch (error) {
//     console.log(error.message)
// }

try {
    [results] = await conn.query(`select row_count() as affectedRows`);
console.log(results)
} catch (error) {
    console.log(error.message)
}