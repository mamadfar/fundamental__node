import { Op, sql } from "@sequelize/core";

import User from '../user.model.js'
import UsersSeed from '../users.seed.js'


await User.sync({ force: true });
await UsersSeed();

let users;

// users = await User.findAll({
//     attributes: ['username', 'email'],
//     limit: 3,
//     raw: true
// })
// console.log(users);

// users = await User.findAll({
//     attributes: {
//         exclude: ['password', 'createdAt', 'updatedAt']
//     },
//     limit: 2,
//     raw: true,
//     logging: console.log
// })

// console.log(users);

// users = await User.findAll({
//     where: {
//         username: {
//             //? sql.attribute() allows us to reference another column in the same table, so we can compare the value of one column with another column.
//             [Op.gt]: sql.attribute('password')
//         }
//     },
//     attributes: ['username', 'password'],
//     raw: true,
//     logging: console.log
// })

// console.log(users);

// users = await User.findAll({
//     where: {
//         id: {
//             [Op.gt]: 3
//         }
//     },
//     attributes: ['username', 'password'],
//     raw: true,
//     order: ['password'],
//     order: ['password', 'email'],
//     order: [['password', 'desc'], 'username'],
//     logging: console.log
// })

// console.log(users);

users = await User.findAll({
    where: {
        id: {
            [Op.gt]: 3
        }
    },
    attributes: ['id', 'username', 'password'],
    limit: 4,
    offset: 8,
    raw: true,
    logging: console.log
})

console.log(users);