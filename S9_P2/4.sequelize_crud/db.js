import {Sequelize} from '@sequelize/core'
import {MySqlDialect} from '@sequelize/mysql'

const sequelize = new Sequelize({
    dialect: MySqlDialect,
    host: 'localhost',
    database: 'sequelize',
    user: 'root',
    password: '1234',
    port: 3306,
    logging: false
})

try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.log(error.message)
    process.exit(1)
}

export default sequelize