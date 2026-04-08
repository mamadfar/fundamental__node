import { Op } from "@sequelize/core";

import User from '../user.model.js'
import UsersSeed from '../users.seed.js'

await User.sync({ force: true });
await UsersSeed();

let users;

// users = await User.findAll({
//     //? We can use multiple operators in the same query, and they will be combined with AND logic by default.
//     where: {
//         id: {
//             [Op.gt]: 4
//         },
//         password: {
//             [Op.like]: '%r%'
//         },
//         email: {
//             [Op.regexp]: 'com$'
//         }
//     },
//     attributes: ['id', 'password', 'email'],
//     raw: true,
//     logging: console.log
// })

// console.log(users);

// users = await User.findAll({
//     where: {
//         [Op.or]: {
//             id: {
//                 [Op.gt]: 4
//             },
//             password: {
//                 [Op.like]: '%c%'
//             }
//         },
//         id: {
//             [Op.lt]: 11
//         }
//     },
//     attributes: ['id', 'password', 'email'],
//     raw: true,
//     logging: console.log
// })

// console.log(users);

// users = await User.findAll({
//     where: {
//         //? The 2nd operator of the same operator will override the 1st one
//         // [Op.not]: {
//         //     id: {
//         //         [Op.gt]: 4
//         //     },
//         //     password: {
//         //         [Op.like]: '%c%'
//         //     }
//         // },
//         [Op.not]: {
//             [Op.or]: {
//                 id: {
//                     [Op.gt]: 4
//                 },
//                 password: {
//                     [Op.like]: '%c%'
//                 }
//             }
//         }
//     },
//     attributes: ['id', 'password', 'email'],
//     raw: true,
//     logging: console.log
// });

// console.log(users);

users = await User.findAll({
    where: {
        //? [Op.or] in this case will return the users with id greater than 8 and it will combine it with the users with password that contains 'c' (so OR will combine the results of both conditions).
        [Op.or]: {
            id: {
                [Op.gt]: 8
            },
            password: {
                [Op.like]: '%c%',
                [Op.regexp]: 'd'
            }
        }
    },
    attributes: ['id', 'password', 'email'],
    raw: true,
    logging: console.log
})

console.log(users);