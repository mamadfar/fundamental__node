import { DataTypes } from "@sequelize/core";

import sequelize from "../db.js";

const User = sequelize.define("User", {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
})

await User.sync({ force: true });

const user1 = await User.create({
    username: 'user1',
    firstname: 'first1',
    lastname: 'last1',
})

user1.username = 'username1';
await user1.save();

const user2 = User.build({
    username: 'user2'
})
user2.firstname = 'first2';
await user2.save();
// console.log(user2);
// console.log(user2.username);
// console.log(user2.dataValues);
// console.log(user2.toJSON());
// await user2.reload();
// console.log(user2.toJSON())

const user3 = await User.create({
    username: 'user3',
    firstname: 'first3',
    lastname: 'last3',
}, {
    fields: ['firstname', 'lastname']
})

const result = await User.findOrCreate({
    where: {username: 'user4'},
    defaults: {
        lastname: 'last4',
    }
})
// console.log(result[0].toJSON())
// console.log(result[1])

const [user, created] = await User.findOrCreate({
    where: {username: 'user2'},
    defaults: {
        lastname: 'last2'
    }
})
// console.log(user.toJSON())
// console.log(created)

const users = await User.bulkCreate([
    {
        username: 'user5',
        firstname: 'first5',
        lastname: 'last5',
    },
    {
        username: 'user6',
        firstname: 'first6',
        lastname: 'last6',
    },
], {
    fields: ['username', 'lastname']
})

console.log(users);
console.log(users.map(user => user.dataValues))
console.log(users.map(user => user.toJSON()))
await await users[0].reload();
console.log(users[0].toJSON())