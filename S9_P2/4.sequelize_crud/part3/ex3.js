import { Op, sql } from "@sequelize/core";
 
import User from "../user.model.js";
import UsersSeed from "../users.seed.js";
import sequelize from "../db.js";

await User.sync({ force: true });
await UsersSeed();

let user, result;

// user = await User.findByPk(10);
// result = await user.destroy({logging: console.log});
// console.log(result)

// result = await User.destroy({
//     where: {
//         id: {
//             [Op.lt]: 5
//         }
//     },
//     logging: console.log
// })
// console.log(result)

// result = await User.truncate({ logging: console.log });
// console.log(result)

//? Delete all records from all tables and does not reset identity (auto increment)
// result = await sequelize.destroyAll({ logging: console.log });
// console.log(result)

//? Delete all records from all tables and reset identity (auto increment)
result = await sequelize.truncate({ logging: console.log });
console.log(result)