import { Op } from "@sequelize/core";

import User from '../user.model.js'
import UsersSeed from '../users.seed.js'


await User.sync({ force: true });
await UsersSeed();

let users, user;

users = await User.findAll();
// console.log(users.length)
// console.log(users.map(u => u.toJSON()))
// console.log(users.map(u => u.dataValues))

users = await User.findAll({raw: true});
// console.log(users)

users = await User.findAll({
    where: {
        birthYear: 1995
    },
    raw: true
})
// console.log(users)

users = await User.findAll({
    where: {
        id: {
            [Op.gt]: 6
        }
    },
    limit: 3,
    raw: true
})

// console.log(users)

//? Always returns the first record that matches the query options, or null if no match is found.
user = await User.findOne({
    where: {
        id: {
            [Op.gt]: 6
        }
    },
    raw: true
})

// console.log(user)

user = await User.findOne({
    where: {
        id: {
            [Op.gt]: 20
        }
    },
    raw: true
})

// console.log(user)

user = await User.findByPk(11, {raw: true})
// console.log(user)

user = await User.findByPk(21, {raw: true})
console.log(user)