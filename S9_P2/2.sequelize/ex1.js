import {Sequelize} from '@sequelize/core'
import { MySqlDialect } from '@sequelize/mysql';

//? Way 1: Using separate parameters
let sequelize = new Sequelize({
    dialect: MySqlDialect,
    host: 'localhost',
    database: 'tasks',
    user: 'root',
    password: '1234',
    port: 3306,
    logging: false
})

//? Way 2: Using a connection URI
// sequelize = new Sequelize({
//     dialect: MySqlDialect,
//     url: 'mysql://root:1234@localhost:3306/tasks',
//     port: 3306
// })

try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.log(error.message)
}

try {
    await sequelize.close()
    console.log('Close connection successfully.')
} catch (error) {
    console.log(error.message)
}