import { Op } from "@sequelize/core";

import User from "../user.model.js";
import UsersSeed from "../users.seed.js";

await User.sync({ force: true });
await UsersSeed();

let users;

// users = await User.findAll({
//     where: {
//         username: {
//             [Op.eq]: 'user1'
//         },
//         username: {
//             [Op.is]: null
//         },
//         username: {
//             [Op.in]: ['user1', 'user2']
//         }
//     },
//     attributes: ['id', 'username', 'email'],
//     raw: true,
//     logging: console.log
// })

// console.log(users);

// users = await User.findAll({
//     where: {
//         username: 'user1',
//         username: null,
//         username: ['user1', 'user2']
//     },
//     attributes: ['id', 'username', 'email'],
//     raw: true,
//     logging: console.log
// })

// console.log(users);

// users = await User.findAll({
//     where: {
//         id: {
//             [Op.ne]: 12,
//         },
//         id: {
//             [Op.notIn]: [8, 10, 12, 14]
//         },
//         email: {
//             [Op.isNot]: null
//         }
//     },
//     attributes: ['id', 'username', 'email'],
//     raw: true,
//     logging: console.log
// })

// console.log(users);

// users = await User.findAll({
//   where: {
//     id: {
//         [Op.gt]: 9,
//     },
//     id: {
//         [Op.gte]: 9,
//     },
//     id: {
//       [Op.lt]: 9,
//     },
//     id: {
//       [Op.lte]: 9,
//     },
//   },
//   attributes: ["id", "username", "email"],
//   raw: true,
//   logging: console.log,
// });

// console.log(users);

users = await User.findAll({
    where: {
        // username: {
        //     [Op.like]: '%1%'
        // },
        // username: {
        //     [Op.notLike]: '%1%'
        // },
        // username: {
        //     [Op.regexp]: '\\d{2}'
        // },
        username: {
            [Op.notRegexp]: '5$'
        },
    },
    attributes: ['id', 'username', 'email'],
    raw: true,
    logging: console.log
})

console.log(users);