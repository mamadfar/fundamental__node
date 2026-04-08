import { Op, sql } from "@sequelize/core";

import User from "../user.model.js";
import UsersSeed from "../users.seed.js";

await User.sync({ force: true });
await UsersSeed();

let user;

// user = await User.findByPk(10);
// user.username = 'new_username';
// await user.save();
// console.log(user.toJSON())
// console.log(user instanceof User)

//? When we use raw: true, we get a plain object instead of an instance of the model. Therefore, we cannot call save() on it.
// user = await User.findByPk(10, { raw: true });
// user.username = 'new_username2';
// console.log(user)
// console.log(user instanceof User)
// await user.save();

// user = await User.create({
//     username: 'mamad',
//     email: 'mamad@example.com',
//     password: '1234',
//     birthYear: 1994
// })

// user.id = 24; //? We can not change PK value, it will be ignored
// user.password = '4321';
// await user.save();
// console.log(user.toJSON())

// user = await User.findByPk(5);
// user.set({
//     username: 'new_username5',
//     password: '1111111'
// })
// await user.save();
// console.log(user.toJSON())

// user = await User.findByPk(4);
// user.set({
//     username: 'new_username4',
//     password: '222222'
// })
// await user.save({fields: ['password']}); //? Only password will be updated, username will be ignored
// console.log(user.username)
// await user.reload(); //? Reload the instance from the database, discarding any unsaved changes
// console.log(user.username)

// user = await User.findByPk(3);
// user.password = '333333';
// await user.update({ username: 'new_username3'});
// console.log(user.password)
// await user.reload();
// console.log(user.password)
// await user.update({ id: 333, password: '333333'}) //? We can not change PK value, it will be ignored
// console.log(user.id)
// console.log(user.password)

// user = await User.findByPk(5);
// console.log(user.toJSON())
// await user.increment('birthYear');
// await user.increment('birthYear', { by: 5});
// await user.decrement('birthYear', {by: 2});
// console.log(user.toJSON())
// await user.reload();
// console.log(user.toJSON())
// await user.increment(['id', 'birthYear'], { by: 20}); //? We can update PK
// await user.reload(); //! Error ==> because it's pointing to PK = 5, and we updated it to 25

//* We can update multiple fields
// await User.update({
//     password: '22222', 'birthYear': 2000
// }, {
//     where: {
//         id: {
//             [Op.gt]: 7
//         }
//     },
//     limit: 4
// })

// await User.update({
//     password: '22222', 'birthYear': sql`birthYear + id`
// }, {
//     where: {
//         id: {
//             [Op.gt]: 7
//         }
//     }
// })

await User.update(
  {
    id: 500,
  },
  {
    where: {
      id: 2,
    },
  },
);
