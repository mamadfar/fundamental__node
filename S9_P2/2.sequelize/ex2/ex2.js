import {Attribute, DataTypes, Model} from '@sequelize/core'
import sequelize from './db.js'

//? Way 1: Using Model.init
class User extends Model {}

User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING(100),
    age: DataTypes.INTEGER
}, {
    sequelize
})

await User.sync();

//? Way 2: Using sequelize.define
const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
})

await Task.sync();

//? Way 3: Using decorators (experimental)